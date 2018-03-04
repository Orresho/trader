import React, { Component } from 'react';
import BasePage from './BasePage';
import Items from '../components/items/items';

class BuyContainer extends Component {
    render() {
        return (
            <BasePage>
                <h2>Here is the buy container</h2>
                <hr/>
                <Items />
            </BasePage>
        )
    }
}

export default BuyContainer;