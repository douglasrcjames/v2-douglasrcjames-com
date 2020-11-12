import React, { Component } from 'react'
import OffCanvas from 'react-aria-offcanvas'
import { NavLink, withRouter } from "react-router-dom";
import { HashLink as HashNavLink } from 'react-router-hash-link';

import "../../assets/css/Header.scss";
import "../../assets/css/Hamburger.scss"

const MobilNav = () => (
    <nav id="menu">
      <ul>
        <li>
            <NavLink 
                exact
                to="/experience" 
                className="side-nav-link" 
                activeClassName="side-nav-select"
            >
                Experience
            </NavLink>     
        </li>
        <li>
            <NavLink 
                exact
                to="/social" 
                className="side-nav-link" 
                activeClassName="side-nav-select"
            >
                Social
            </NavLink>
        </li>
        <li className="md-margin-t">
            <HashNavLink 
                to="/#Contact" 
                className="md-white-btn blue">
                Contact
            </HashNavLink>
        </li>
      </ul>
    </nav>
  )

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          deviceWidth: 0,
          deviceHeight: 0,
          isMenuOpen: false,
        };

        this.hamburgerRef = React.createRef();
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        // if(this.hamburgerRef){
        //     this.hamburgerRef.current.addEventListener('click', () => {
        //         this.toggleMenu()
        //       });
        // }
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        // if(this.hamburgerRef){
        //     this.hamburgerRef.current.removeEventListener('click');
        // }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.isMenuOpen !== this.state.isMenuOpen){
    //         this.hamburgerRef.current.classList.toggle('active');
    //     }
    // }

      
    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }

    toggleMenu = () => {
        // if(this.state.isMenuOpen){
        //     this.hamburgerRef.current.classList.add('active');
        // } else {
        //     this.hamburgerRef.current.classList.remove('active');
        // }
        
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    // TODO: on Contact button click we cant scroll after??
    render() {
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
            <header className={this.state.deviceWidth < 900 ? "" : "hide"}>
                <nav className="nav-container">
                    <NavLink exact to="/" className="nav-lg-text" activeClassName="nav-lg-text-select">
                        Douglas R.C. James
                    </NavLink>
                    <div className="right">
                        {/* <svg className="ham ham3" viewBox="0 0 100 100" width="60" ref={this.hamburgerRef}>
                            <path
                                className="line top"
                                d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568" />
                            <path
                                className="line middle"
                                d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7" />
                            <path
                                className="line bottom"
                                d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0" />
                        </svg> */}
                        <i className="fas fa-bars bars" onClick={() => this.toggleMenu()}/>
                        <OffCanvas
                                position="right"
                                isOpen={this.state.isMenuOpen}
                                onClose={this.toggleMenu}
                                height="100%"
                                className="side-menu"
                                style={{
                                    content: {
                                        backgroundColor: "#202D3E",
                                        color: "#fff"
                                    }
                                }}
                                
                            >
                            <i className="fas fa-times times" onClick={() => this.toggleMenu()}/>
                            <br/><br/>
                            <div onClick={()=>this.toggleMenu()}>
                                <MobilNav />
                            </div>
                            
                        </OffCanvas>
                    </div>
                </nav>
            </header>
            </>
        )
    }
}

export default withRouter(Header);