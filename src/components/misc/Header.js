import React, { Component } from 'react'
import OffCanvas from 'react-aria-offcanvas'
import { NavLink, withRouter } from "react-router-dom";
import { HashLink as HashNavLink } from 'react-router-hash-link';

import "../../assets/css/Header.scss";
import "../../assets/css/Hamburger.scss"

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          deviceWidth: 0,
          deviceHeight: 0,
          isMenuOpen: false,
        };

    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

      
    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }

    toggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    render() {
        const MobilNav = () => (
            <nav id="menu">
              <ul>
                <li>
                    <NavLink 
                        exact
                        to="/work" 
                        className="side-nav-link" 
                        activeClassName="side-nav-select"
                        onClick={()=>this.toggleMenu()}
                    >
                        Work
                    </NavLink>     
                </li>
                <li>
                    <NavLink 
                        exact
                        to="/social" 
                        className="side-nav-link" 
                        activeClassName="side-nav-select"
                        onClick={()=>this.toggleMenu()}
                    >
                        Social
                    </NavLink>
                </li>
                <li className="md-margin-t">
                    <HashNavLink 
                        to="/#Contact" 
                        onClick={()=>this.toggleMenu()}
                        className="md-white-btn blue">
                        Contact
                    </HashNavLink>
                </li>
              </ul>
            </nav>
          )
        return (
            <>
            <header className={this.state.deviceWidth >= 900 ? "" : "hide"}>
                <nav className="nav-container">
                    <NavLink exact to="/" className="nav-lg-text" activeClassName="nav-lg-text-select">
                        Douglas R.C. James
                    </NavLink>
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/work" 
                            className="nav-link" 
                            activeClassName="nav-select"
                        >
                            Work
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
            <header className={this.state.deviceWidth < 900 ? "" : "hide"}>
                <nav className="nav-container">
                    <NavLink exact to="/" className="nav-lg-text" activeClassName="nav-lg-text-select">
                        Douglas R.C. James
                    </NavLink>
                    <div className="right">
                        <i className="fas fa-bars bars" onClick={() => this.toggleMenu()}/>
                        <OffCanvas
                                position="right"
                                isOpen={this.state.isMenuOpen}
                                onClose={this.toggleMenu}
                                height="100%"
                                className="side-menu"
                                lockBodyAfterOpen={false}
                                style={{
                                    content: {
                                        backgroundColor: "#202D3E",
                                        color: "#fff"
                                    }
                                }}
                            >
                            <i className="fas fa-times times" onClick={() => this.toggleMenu()}/>
                            <br/><br/>
                            <MobilNav />
                        </OffCanvas>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}

export default withRouter(Header);