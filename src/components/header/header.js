import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Trading Post</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/sell" activeClassName="is-active">Sell</NavLink>
        <NavLink to="/buy" activeClassName="is-active">Buy</NavLink>
    </header>
)

export default Header;