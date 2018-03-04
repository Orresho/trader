import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import BasePage from './BasePage';
import TradingPostNavigation from './TradingPostNavigation';

class TradingPostContainer extends Component {
    render() {
        return (
            <BasePage>
                <TradingPostNavigation>
                </TradingPostNavigation>
            </BasePage>
        )
    }
}

export default TradingPostContainer;