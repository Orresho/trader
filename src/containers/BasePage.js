import React, { Component } from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Header />
                    
                <Footer />
            </div>
        )
    }
}

export default BasePage;