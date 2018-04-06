import React, { Component } from 'react';

class Resource extends Component {

  constructor(props){
    super(props)
    this.state = this.props
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {
    
    this.value = (value => {

      if ( value >= 1e16 )  //10m ~ 999m
        return (value/1e15).toFixed(0) + 'Qa'
      if ( value >= 1e15 )  //1m ~ 9.9m
        return (value/1e15).toFixed(1) + 'Qa'

      if ( value >= 1e13 )  //10m ~ 999m
        return (value/1e12).toFixed(0) + 'T'
      if ( value >= 1e12 )  //1m ~ 9.9m
        return (value/1e12).toFixed(1) + 'T'

      if ( value >= 1e10 ) //10m ~ 999m
        return (value/1e9).toFixed(0) + 'B'
      if ( value >= 1e9 )  //1m ~ 9.9m
        return (value/1e9).toFixed(1) + 'B'

      if ( value >= 1e7 ) //10m ~ 999m
        return (value/1e6).toFixed(0) + 'M'
      if ( value >= 1e6 ) //1m ~ 9.9m
        return (value/1e6).toFixed(1) + 'M'

      if ( value >= 1e4 ) //10K ~ 999k
        return (value/1e3).toFixed(0) + 'K'
      if ( value >= 1e3 ) //1K ~ 9.9k
        return (value/1e3).toFixed(1) + 'K'

      return Math.floor(value)
    })(this.state.value)
    
    return (
        <span className='Num'>
          {this.value}
        </span>
    );
  }
}

export default Resource;
