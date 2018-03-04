import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class TradingPost extends Component{
    render(){
        return(
            <div>
                <h1>Trading Post</h1>
                <NavLink to="/tradingpost/buy" activeClassName="is-active" exact={true} >Buy</NavLink>
                <NavLink to="/tradingpost/sell" activeClassName="is-active" exact={true} >Sell</NavLink>
            </div>
        )
    }
   
}

export default TradingPost;