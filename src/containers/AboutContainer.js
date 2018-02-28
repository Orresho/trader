import React, { Component } from 'react';
import About from '../components/About/About';
import BasePage from '../containers/BasePage';

class AboutContainer extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <BasePage>
                <About />
            </BasePage>
        )
    }
}

export default AboutContainer;