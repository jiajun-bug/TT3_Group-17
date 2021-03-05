import React from 'react';
// import Login from './Login';
import LoginApi from "./api/LoginApi";
import AddTransaction from "./AddTransaction";

class App extends React.Component {
    state = {response: "",addresponse:""};
    // LoggingIn = async (user, pass) => {
    //     const loggedin = await LoginApi.post("/login",{
    //         username: user,
    //         password: pass
    //     });
    //     this.setState({response: loggedin});
    //     console.log(loggedin);
    // }
    // Belongs to AddTransaction Component
    Transacting = async(accKey, order, amount) => {
        const transacted = await LoginApi.post("/transactions/add",{
            accountKey: accKey,
            orderType: order,
            assetAmount: amount
        });
        
        this.setState({addresponse:transacted})
    }

    render() {
        return (
            <div>
                {/* <Login onsubmit={this.LoggingIn} /> */}
            
                <AddTransaction ontransact={this.Transacting} />
            </div>
        );

    };
}

export default App;