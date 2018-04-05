import React, { Component } from 'react';

import './App.scss';

import Main     from './components/_Main/Main.js';
import Header     from './components/_Header/Header.js';

import defaultPlayer from './_defaultPlayer.json'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = defaultPlayer

    this.canAfford = this.canAfford.bind(this)
    this.deduce = this.deduce.bind(this)

    this.clearCurAction = this.clearCurAction.bind(this)
    this.changeAction = this.changeAction.bind(this)
    this.act = function(){  }

    this.Work = this.Work.bind(this)

    this.build = this.build.bind(this)

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

  canAfford(cost){
    var ret = true
    console.log(this.state)
    cost.forEach(el => {
      const resource = this.state.res.filter((res) => {
        if(res.key === el[0]) return true
      })[0]

      console.log('checking', el[0], 'needs', el[1], 'have', resource.cur)

      if(resource.cur < el[1]) ret = false
    });
    return ret
  }

  deduce(type, amount){
    var newRes = this.state.res
    newRes.map((res)=>{
      if(res.key === type)
        res.cur -= amount
    })
    console.log(newRes)
  }

  clearCurAction(){
    if(!this.state.genAction && !this.state.action) return

    if(this.state.genAction === 'work'){
      var newRes = this.state.res,
          index = (0 - 1)
      
      newRes.filter((el, i) => {
        if(el.key === this.state.action){
          index = i
          return true
        }
        return false
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
          index = (0 - 1)
      
      newRes.filter((el, i) => {
        if(el.key === type){
          index = i
          return true
        }
        return false
      })
      
      if(newRes[index].cur >= newRes[index].limit){
        newRes[index].cur = newRes[index].limit
        this.clearCurAction()
      } else {
        newRes[index].cur += this.state.eff / 10
        newRes[index].persec = this.state.eff
      }

      this.setState({
        res: newRes
      })
      
    }
  }

  build(key){
    const bData = this.state.buildings.filter((el, i) => {
            if(el.key === key){
              return true
            }
            return false
          })[0],
          cost = bData.cost

    if(this.canAfford(cost)){
      
      cost.forEach(c => {
        const type = c[0],
              amount = c[1]
        this.deduce(type, amount)
      });
      
      var newBld = this.state.buildings
      newBld.map(el => {
        if(el.key === key){
          el.owned++
        }
      })
      this.setState({
        buildings: newBld
      })

    } else {
      
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
          build={this.build}
          buildings={this.state.buildings}
        />
      </div>
    );
  }
}

export default App;















