import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <h1>Here goes content</h1>
                <hr />
                <Footer />
            </div>
        )
    }
}

export default BasePage;