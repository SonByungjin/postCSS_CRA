import React, { Component } from 'react';
// import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SigInScreen} from './signin/Signin';
import {Support} from './support/Support';

export class Layout extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={SigInScreen}/>
                    <Route exact path='/support' component={Support}/>
                </Switch>
            </Router>
        );
    }
}
