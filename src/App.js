import React, { Component } from 'react';
import HomeLoginScreen from './screens/HomeLoginScreen'
import MyEvents from './screens/MyEvents'
import EventDetails from './screens/EventDetails'
import Menu from './screens/Menu'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect 
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
                    <Switch>
                        <Route exact path="/" render={ (props) => <Redirect to="/menu" /> } />
                        <Route path="/menu" render={ (props) => <Menu />} />
                        <Route path="/myevents" render={ (props) => <MyEvents {...props} onLogout={this.handleUserLogout} />} />
                        <Route path="/details/:event" render={ (props) => <EventDetails {...props} onLogout={this.handleUserLogout} />} />
                    </Switch>
                </Router>
            )
        } else {
            return (<HomeLoginScreen onLogin={this.handleUserLogin}/>)
        }
    }
}

export default App;
