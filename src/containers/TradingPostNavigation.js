import React, { Component } from 'react'
import TradingPost from '../components/tradingpost/tradingpost';

class TradingPostNavigation extends Component {
    render() {
        const {children} = this.props;
        
        return (
            <div>
                <TradingPost/>
                {children}
            </div>
        )
    }
}

export default TradingPostNavigation;