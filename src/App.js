import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from './components/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/view">
                        <Nav/>
                        <View />
                    </Route>
                    <Route path="/balance">
                        <Nav/>
                    </Route>
                    <Route path="/price">
                        <Nav/>
                    </Route>
                    <Route path="/historical">
                        <Nav/>
                    </Route>
                    <Route path="/pasttransaction">
                        <Nav/>
                    </Route>
                    <Route path="/buyandsell">
                        <Nav/>
                    </Route>
                </Switch>
            </div>
        );

    }
}

export default App;