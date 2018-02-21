import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class BasePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}