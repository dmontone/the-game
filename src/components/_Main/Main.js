import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import Resources from '../Resources/resources.js';
import Buildings from '../Buildings/buildings.js';
 
class Main extends Component {

  constructor(props){
    super(props)
    this.state = this.props
    console.log(this.props)
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {
    return (
        <div className="Main">
          <Resources
            buildStorage={this.props.buildStorage}
            action={this.state.action} 
            changeAction={this.state.changeAction} 
            list={this.state.resources}
          />
          <Buildings
            build={this.state.build}
            list={this.state.buildings}
          />
        </div>
    )
  }
}

export default Main;
