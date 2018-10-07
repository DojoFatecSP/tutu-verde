import React, { Component } from 'react'
import {Modal} from 'reactstrap'
import Button from '@material-ui/core/Button';
import SingIn from '../comps/SingIn'

class Welcome extends Component {
    state = {
        modal: false,
    }

    showModalLogin = () => {
        this.setState({modal:true})
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <section className="cid-qTkA127IK8 mbr-fullscreen" id="header2-1">
                <div className="container align-center">
                    <div className="row justify-content-md-center">
                        <div className="mbr-white col-md-10">
                            <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-3">
                                TUTU VERDE</h1>
                            
                            <p className="mbr-text pb-3 mbr-fonts-style display-5">O melhor modo de organizar os seus eventos</p>
                            <Button onClick={this.showModalLogin} variant="contained" color="primary" size="large">Comece Agora</Button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <SingIn onLogin={this.props.onLogin}/>
                </Modal>

            </section>
        )
    }
}

export default Welcome