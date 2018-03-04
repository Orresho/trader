import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/about" activeClassName="is-active">About</NavLink>
        <NavLink to="/tradingpost" activeClassName="is-active">Trading post</NavLink>
    </header>
)

export default Header;