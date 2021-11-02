import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Body";
import Email from "./Email";
import Heading from "./Heading";

function Routes() {
    return (<Router >
            <Switch>
                <Route exact={true} path="/">
                    <Heading />
                    <Body />
                </Route>
                <Route exact={true} path="/email">
                    <Email />
                </Route>
            </Switch>
        </Router>)
}

export default Routes;