import React, { Component } from "react";
import Items from '../components/items/items';
import BasePage from './BasePage';

class ItemsContainer extends Component {
    render() {
        return (
            <BasePage>
                <Items />
            </BasePage>
        )
    }
}

export default ItemsContainer