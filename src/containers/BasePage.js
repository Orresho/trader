import React, { Component } from 'react'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class BasePage extends Component {
    render() {
        const {children} = this.props;
        
        return (
            <div>
                <Header />
                    {children}
                <Footer />
            </div>
        )
    }
}

export default BasePage;