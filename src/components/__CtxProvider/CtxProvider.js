import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CtxProvider extends Component {

    static childContextTypes = {
        player: PropTypes.object
    };

    getChildContext() {
        return {
            player: this.props.player
        }
    }

    render() {
        return <div>{this.props.children}</div>
    }

}

export default CtxProvider;