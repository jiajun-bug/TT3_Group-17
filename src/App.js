import React from 'react';
//import { render } from 'react-dom';
import LoginApi from './LoginAPI'
import walletBalance from './WalletBalance';

class App extends React.Component {
    state = {response: ""};
     Balancing = async (key) => {
        const balance = await LoginApi.post("/balance",{
            userkey: '21d7975f-0cee-a5ec-d08fded2a4c7'
        });
        this.setState({response: balance});
        }
    render() {
        return (
            <div>
            <div>Hello
                <walletBalance props = {this.Balancing} />
            </div>
            </div>
        );

    }
};

export default App;