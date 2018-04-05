import React, { Component } from 'react';

import Building from '../Building/building.js';

class Buildings extends Component {

  constructor(props){ 
    super(props)
    this.state = this.props
  }

  componentWillReceiveProps(props){
    this.setState(props) 
  }

  render() {

    return (
        <div className='Buildings'>
            Buildings
            {this.state.list.map((bld, i) => {
              return (
                <Building key={i} build={this.state.build} bld={bld} />
              )
            })}
        </div>
    )

  }
}

export default Buildings;
