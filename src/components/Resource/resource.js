import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

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
    

  }

  action(){
    return this.state.changeAction('work')
  }

  changeAction(){
    this.action()(this.state.res.key)
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
          <div className='name'>{this.state.res.name}</div>
          <div className={'progress' + this.progressClass}>
            <div className={'fill' + this.progressClass} style={ { width: this.percent + '%' } }></div>
          </div>
          <div className='amount'>
            <span className='current'>{Math.floor(this.state.res.cur)}</span>/<span className='max'>{this.state.res.limit}</span>
          </div>
          <div className='persec'>
            {this.state.res.persec}/s
          </div>
          <div className={this.actionClass} onClick={this.changeAction}>{ !this.currently ? this.state.res.actionName[0] : this.state.res.actionName[1] }</div>
        </div>
    );
  }
}

export default Resource;
