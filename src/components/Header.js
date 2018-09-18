import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="header container">
    <NavLink className="nav-link" activeClassName="nav-link-active" to="/" exact>Homepage</NavLink>
    <NavLink className="nav-link" activeClassName="nav-link-active" to="/about" exact>About</NavLink>
  </nav>
)

export default Header;