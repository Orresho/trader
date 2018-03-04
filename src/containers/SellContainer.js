import React, {Component} from 'react';
import Items from '../components/items/items';
import BasePage from './BasePage';
import TradingPostNavigation from './TradingPostNavigation';

class SellContainer extends Component {
    render(){
        return (
            <BasePage>
                <TradingPostNavigation>
                    <h2>Here is the sell container</h2>
                    <hr/>
                    <Items />
                </TradingPostNavigation>
            </BasePage>
        )
    }
}

export default SellContainer;