import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import Social from './components/pages/Social'
import Experience from './components/pages/experience/Experience'
import MinuteTech from './components/pages/experience/MinuteTech';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/social" component={withTracker(Social)} />
                <Route exact path="/experience" component={withTracker(Experience)} />
                <Route exact path="/experience/minute.tech" component={withTracker(MinuteTech)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);