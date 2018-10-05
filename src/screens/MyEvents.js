import React, { Component } from "react";
import EventCard from '../comps/EventCard'
import ButtonAppBar from '../comps/ButtonAppBar'

class MyEvents extends Component {
    state = {
        events:[{name: 'Evento A', description: 'bla bla With supporting text below as a natural lead-in to additional content.'},{name: 'Evento B', description: 'ble ble With supporting text below as a natural lead-in to additional content.'}]
    }
    render() {
        return(
            <div>
                <ButtonAppBar title="Meus Eventos" />
                {this.state.events.map(event => <EventCard {...event} />)}
                <br />
            </div>
        )
    }
}

export default MyEvents