import React, { Component } from 'react';

import './App.scss';

import Main     from './components/_Main/Main.js';
import Header     from './components/_Header/Header.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eff: 10,
      genAction: null,
      action: null,
      res: [
        {
          key: 'food',
          name: 'Food',
          cur: 0,
          limit: 500,
          actionName: ['gather', 'gathering'],
          persec: 0
        },
        {
          key: 'wood',
          name: 'Wood',
          cur: 0,
          limit: 500,
          actionName: ['chop', 'chopping'],
          persec: 0
        },
        {
          key: 'stone',
          name: 'Stone',
          cur: 0,
          limit: 500,
          actionName: ['pick', 'picking'],
          persec: 0
        },
        {
          key: 'metal',
          name: 'Metal',
          cur: 0,
          limit: 500,
          actionName: ['melt', 'melting'],
          persec: 0
        }
      ]
    }

    this.clearCurAction = this.clearCurAction.bind(this)
    this.changeAction = this.changeAction.bind(this)
    this.act = function(){  }

    this.Work = this.Work.bind(this)

  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 100 );
    
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.act()
  }  

  clearCurAction(){
    if(!this.state.genAction && !this.state.action) return

    if(this.state.genAction === 'work'){
      var newRes = this.state.res,
          index = (0 - 1),
          actResIndex = newRes.filter((el, i) => {
            if(el.key === this.state.action){
              index = i
              return true
            }
          })
      newRes[index].persec = 0
      this.setState({
        res: newRes
      })
    }



    this.setState({
      genAction: null,
      action: null
    })

  }

  changeAction(action){
    this.clearCurAction()
    this.setState({ genAction: action })
    if(action === 'work') return this.Work
  }

  Work(type){
    this.setState({ action: type })
    this.act = function(){
      var newRes = this.state.res,
            index = (0 - 1),
            actResIndex = newRes.filter((el, i) => {
              if(el.key === type){
                index = i
                return true
              }
            })
      
      if(newRes[index].cur >= newRes[index].limit){
        newRes[index].cur = newRes[index].limit
        newRes[index].persec = 0
      } else {
        newRes[index].cur += this.state.eff / 10
        newRes[index].persec = this.state.eff
      }

      this.setState({
        res: newRes
      })
      
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          changeAction={this.changeAction}
          action={this.state.action}
          resources={this.state.res}
        />
      </div>
    );
  }
}

export default App;















