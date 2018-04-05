import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import Resources from '../Resources/resources.js';

class Main extends Component {

  constructor(props){
    super(props)

    this.state = {
      action: this.props.action,
      changeAction: this.props.changeAction,
      res: this.props.resources
    }
    
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }

  render() {
    return (
        // <Switch>
        //     <Route exact path='/training' component={Training}/>
        //     <Route path='/roster' component={Roster}/>
        //     <Route path='/schedule' component={Schedule}/>
        // </Switch>
        <div className="Main">
          <Resources
            action={this.state.action} 
            changeAction={this.state.changeAction} 
            list={this.state.res}
          />
        </div>
    )
  }
}

export default Main;
