import React from 'react';
import {withRouter} from 'react-router-dom';

class Nav extends React.Component {
    
    state={ clickedon : false};
    clicked = () => {
        if(this.state.clickedon===false) {
            this.setState({clickedon:true});
        }
        else {
            this.setState({clickedon:false});
        }
    }
    render() {
        return (
        <div>
            <li>
                User details
                
            </li>
            <li>
                View wallet balance
            </li>
            <li>
                Current pricing of assets
            </li>
            <li>
                Historical pricing of assets
            </li>
            <li>
                View past transactions
            </li>
            <li>
               Buy and sell assets
            </li>
        </div>);
    }
}
export default withRouter(Nav);