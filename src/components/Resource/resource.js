import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Num from '../__Num/num.js'

import './style.scss'

class Resource extends Component {

  constructor(props){
    super(props)

    this.state = {
      action: this.props.action,
      changeAction: this.props.changeAction,
      res: this.props.res
    }

    this.action = this.action.bind(this)
    this.changeAction = this.changeAction.bind(this)
    this.buildStorage = this.buildStorage.bind(this)
    

  }

  action(){
    return this.state.changeAction('work')
  }

  changeAction(){
    this.action()(this.state.res.key)
  }

  buildStorage(){
    console.log(this.props)
    this.props.buildStorage(this.state.res)
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {

    this.currently = (this.state.action === this.state.res.key)

    this.actionClass = 'action'
    this.actionClass += (this.currently) ? ' active' : ''
    
    this.percent = (this.state.res.cur * ( 100 / this.state.res.limit))

    this.progressClass = (() => {
      if(this.percent > 75) return ' danger'
      if(this.percent > 50) return ' warning'
      return ''
    })()

    return (
        <div className='Resource'>
          <div className="panel">
            <div className='name'>{this.state.res.name}</div>
            <div className={'progress' + this.progressClass}>
              <div className={'fill' + this.progressClass} style={ { width: this.percent + '%' } }></div>
            </div>
            <div className='amount'>
              <span className='current'><Num value={this.state.res.cur} /></span>/<span className='max'><Num value={this.state.res.limit} /></span>
            </div>
            <div className='persec'>
              <Num value={this.state.res.persec} />/s
            </div>
            <div className={this.actionClass} onClick={this.changeAction}>{ !this.currently ? this.state.res.actionName[0] : this.state.res.actionName[1] }</div>
          </div>
          <div className="storage" onClick={this.buildStorage}>
            <div className="name">{this.state.res.storageName}</div>
            <ul className="cost">
              {this.state.res.storageCurCost.map((b, i) => {
                return (
                  <li key={i} className={b[0]}><span className="label">{b[0].substr(0, 1)}</span><Num value={b[1]} /></li>
                )
              })}
            </ul>
          </div>
        </div>
    );
  }
}

export default Resource;
