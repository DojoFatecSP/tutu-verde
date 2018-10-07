import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import {CardDeck} from 'reactstrap'
import EventCard from '../comps/EventCard'
import ButtonAppBar from '../comps/ButtonAppBar'

class MyEvents extends Component {
    state = {
        events:[{name: 'Evento A', description: 'bla bla With supporting text below as a natural lead-in to additional content.'},{name: 'Evento B', description: 'ble ble With supporting text below as a natural lead-in to additional content.'}]
    }
    render() {
        const { classes } = this.props;
        return(
            <div>
                <ButtonAppBar title="Meus Eventos" onLogout={this.props.onLogout}/>
                <CardDeck className={classes.EventsCounteiner}>
                    {this.state.events.map(event => <EventCard {...event} />)}
                </CardDeck>
                <br />
            </div>
        )
    }
}

const styles = {
    EventsCounteiner: {
        marginTop: 70,
    },
  };

export default withStyles(styles)(MyEvents);