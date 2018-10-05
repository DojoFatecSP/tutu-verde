import React, { Component } from 'react';
import HomeLoginScreen from './screens/HomeLoginScreen'
import MyEvents from './screens/MyEvents'
import EventDetails from './screens/EventDetails'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
//import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


class App extends Component {
    state = {
        user: null,
    }

    handleUserLogin = (user) => {
        this.setState({user});
    }

    handleUserLogout = () => {
        this.setState({user: null})
        alert("Usuário desconectado com sucesso!")
    }

    render() {
        if (this.state.user) {
            return (
                <Router>
                    <div>
                        <Route exact path="/" render={ (props) => <MyEvents {...props} onLogout={this.handleUserLogout} />} />
                        <Route path="/details/:event" render={ (props) => <EventDetails {...props} onLogout={this.handleUserLogout} />} />
                    </div>
                </Router>
            )
        } else {
            return (<HomeLoginScreen onLogin={this.handleUserLogin}/>)
        }
    }
}

export default App;
