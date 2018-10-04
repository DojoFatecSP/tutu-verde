import React, { Component } from 'react';
import ButtonAppBar from '../comps/ButtonAppBar'
import Weelcome from '../comps/Welcome'
import FeaturesDescriptions from '../comps/FeaturesDescriptions'
import Footer from '../comps/Footer'


class HomeLoginScreen extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <Weelcome />
                <FeaturesDescriptions />
                <Footer />
            </div>
        )
    }
}

export default HomeLoginScreen