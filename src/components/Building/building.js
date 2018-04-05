import React, { Component } from 'react';

import './styles.scss'

class Buildings extends Component {

  constructor(props){ 
    super(props)
    this.state = this.props

    this.build = this.build.bind(this)

  }

  build(){
    this.state.build(this.state.bld.key)
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {

    return (
      <div className="Building">
        <div className="data">
          <div className="name">{this.state.bld.name}
            <ul>
              {this.state.bld.cost.map((b, i) => {
                return (
                  <li key={i} className={b[0]}><span>{b[0].substr(0, 1)}</span>{b[1]}</li>
                )
              })}
            </ul>
          </div>
          <div className="owned">{this.state.bld.owned}</div>
        </div>
        <div className="build" onClick={this.build}>+</div>
      </div>
    )

  }
}

export default Buildings;
