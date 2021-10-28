import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Body";

function Routes() {
    return (<Router >
            <Switch>
                <Route exact={true} path="/">
                    <Body />
                </Route>
            </Switch>
        </Router>)
}

export default Routes;