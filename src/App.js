import React, { Component } from 'react';
import HomeLoginScreen from './screens/HomeLoginScreen'
import MyEvents from './screens/MyEvents'
//import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


class App extends Component {
    state = {
        user: {}
    }
    render() {
        if (this.state.user) {
            return (<MyEvents />)
        } else {
            return (<HomeLoginScreen />)
        }
    }
}

export default App;
