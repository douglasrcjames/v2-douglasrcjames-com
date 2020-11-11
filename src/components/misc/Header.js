import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";
import { HashLink as HashNavLink } from 'react-router-hash-link';

import "../../assets/css/Header.scss";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <NavLink exact to="/" className="nav-lg-text" activeClassName="nav-select">
                        Douglas R.C. James
                    </NavLink>
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/experience" 
                            className="nav-link" 
                            activeClassName="nav-select"
                        >
                            Experience
                        </NavLink>
                        <NavLink 
                            exact
                            to="/social" 
                            className="nav-link" 
                            activeClassName="nav-select"
                        >
                            Social
                        </NavLink>
                        <HashNavLink 
                            to="/#Contact" 
                            className="md-blue-btn nav-button">
                            Contact
                        </HashNavLink>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);