import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";
import { jobs } from './utils/jobs';

// Pages
import Home from './components/pages/Home'
import Social from './components/pages/Social'
import Work from './components/pages/work/Work'
import Job from './components/pages/work/Job';


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/social" component={withTracker(Social)} />
                <Route exact path="/work" component={withTracker(Work)} />
                {  
                    jobs.map((job, i) => {
                        return (
                            <Route 
                                key={i} 
                                exact 
                                path={`/work/${job.title.split(" ").join("-").toLowerCase()}`} 
                                component={() => 
                                    <Job job={job} previousJob={jobs[i-1]} nextJob={jobs[i+1]} />} 
                                />
                            )
                    })  
                }
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);