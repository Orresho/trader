import React, { Component } from 'react';
import About from '../components/about/About';
import BasePage from './BasePage';

class AboutContainer extends Component {
    render() {
        return (
            <BasePage>
                <About />
            </BasePage>
        )
    }
}

export default AboutContainer;