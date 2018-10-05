import React, { Component } from 'react';
import Weelcome from '../comps/Welcome'
import FeaturesDescriptions from '../comps/FeaturesDescriptions'
import Footer from '../comps/Footer'


class HomeLoginScreen extends Component {
    render() {
        return (
            <div>
                <Weelcome />
                <FeaturesDescriptions />
                <Footer />
            </div>
        )
    }
}

export default HomeLoginScreen