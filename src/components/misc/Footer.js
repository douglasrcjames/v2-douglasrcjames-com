import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { SocialLink } from '../../utils/misc'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
          deviceWidth: 0,
          deviceHeight: 0,
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

    scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    render() {
        return (
            <footer>
                <div className={this.state.deviceWidth >= 1401 ? "f-container" : "hide"}>
                    <Grid>
                        <Row middle="xs">
                            <Col md={12} lg={3} className="center-text">
                                <span className="xl-text">douglasrcjames &copy;{this.state.year}</span>
                            </Col>
                            <Col md={12} lg={6} className="center-text">
                                <SocialLink
                                    label={"email"}
                                    link={"mailto:douglasrcjames@gmail.com"}
                                    />
                                <SocialLink 
                                    label={"linkedin"}
                                    link={"https://www.linkedin.com/in/douglasrcjames/"}
                                    />
                                <SocialLink 
                                    label={"github"}
                                    link={"https://github.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"twitter"}
                                    link={"https://twitter.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"instagram"}
                                    link={"https://www.instagram.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"facebook"}
                                    link={"https://www.facebook.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"spotify"}
                                    link={"https://open.spotify.com/user/12177962281?si=Z7LDndg3QBi4BN9_5siHvg"}
                                    />
                                <SocialLink 
                                    label={"soundcloud"}
                                    link={"https://soundcloud.com/douglasrcjames"}
                                    />
                            </Col>
                            <Col md={12} lg={3} className="center-text">
                                <span className="xl-text cursor-pointer" onClick={() => this.scrollTop()}><i className="fas fa-chevron-up"/> back to top</span>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className={this.state.deviceWidth < 1400 ? "f-container" : "hide"}>
                    <Grid>
                        <Row middle="xs">
                            <Col xs={12} className="center-text">
                                <span className="xl-text cursor-pointer" onClick={() => this.scrollTop()}><i className="fas fa-chevron-up"/> back to top</span>
                            </Col>
                            <Col xs={12}className="center-text">
                                <SocialLink
                                    label={"email"}
                                    link={"mailto:douglasrcjames@gmail.com"}
                                    />
                                <SocialLink 
                                    label={"linkedin"}
                                    link={"https://www.linkedin.com/in/douglasrcjames/"}
                                    />
                                <SocialLink 
                                    label={"github"}
                                    link={"https://github.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"twitter"}
                                    link={"https://twitter.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"instagram"}
                                    link={"https://www.instagram.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"facebook"}
                                    link={"https://www.facebook.com/douglasrcjames"}
                                    />
                                <SocialLink 
                                    label={"spotify"}
                                    link={"https://open.spotify.com/user/12177962281?si=Z7LDndg3QBi4BN9_5siHvg"}
                                    />
                                <SocialLink 
                                    label={"soundcloud"}
                                    link={"https://soundcloud.com/douglasrcjames"}
                                    />
                            </Col>
                            <Col xs={12} className="center-text">
                                <span className="xl-text">douglasrcjames &copy;{this.state.year}</span>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </footer>
        )
    }
}
