import React, { Component } from 'react';
import BasePage from './BasePage';
import Items from '../components/items/items';
import TradingPostNavigation from './TradingPostNavigation';

class BuyContainer extends Component {
    render() {
        return (
            <BasePage>
                <TradingPostNavigation>
                    <h2>Here is the buy container</h2>
                    <hr/>
                    <Items />
                </TradingPostNavigation>    
            </BasePage>
        )
    }
}

export default BuyContainer;