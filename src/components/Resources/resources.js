import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Resource from '../Resource/resource.js';

class Resources extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      action: this.props.action,
      changeAction: this.props.changeAction,
      list: this.props.list
    }

  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {

    return (
        <div className="Resources">
        {this.state.list.map((res, i) => {
          return (
            <Resource action={this.state.action} changeAction={this.state.changeAction} key={i} res={res} />
          )
        })}
        </div>
    );
  }
}

export default Resources;
