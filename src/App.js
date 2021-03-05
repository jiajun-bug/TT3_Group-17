import React from 'react';
import Login from './Login';
import LoginApi from "./api/LoginApi";

class App extends React.Component {
    state = {response: ""};
    LoggingIn = async (user, pass) => {
        const loggedin = await LoginApi.post("/login",{
            username: user,
            password: pass
        });
        this.setState({response: loggedin});
        console.log(loggedin);
    }

    render() {
        return (
            <div>
                <Login onsubmit={this.LoggingIn} />
            </div>
            
        );

    };
}

export default App;