import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';
import View from './components/View';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/view">
                        <Nav road="/view" />
                        <View />
                    </Route>
                    <Route path="/balance">
                        <Nav road="/balance"/>
                    </Route>
                    <Route path="/price">
                        <Nav road="/price"/>
                    </Route>
                    <Route path="/historical">
                        <Nav road="/historical"/>
                    </Route>
                    <Route path="/pasttransaction">
                        <Nav road="/pasttransaction"/>
                    </Route>
                    <Route path="/buyandsell">
                        <Nav road="buyandsell"/>
                    </Route>
                </Switch>
            </div>
        );

    }
}

export default withRouter(App);