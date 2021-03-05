import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    state={user:'',pass:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onsubmit(this.state.user,this.state.pass);
    } 

    render() {
        return (
            <form className="form-control"onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Username </label>
                    <input type="text" placeholder="Username..." onChange={(e)=>this.setState({user:e.target.value})} />
                </div>
                <div className="form-control">
                    <label>Password </label>
                    <input type="text" placeholder="Password" onChange={(e)=>this.setState({pass:e.target.value})} />
                </div>
                <button className="btn btn-sm btn-outline-primary"  type="submit">Login</button>

            </form>
        );
    }

}

export default withRouter(Login);