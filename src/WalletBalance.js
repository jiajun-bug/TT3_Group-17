import React from 'react';
import { render } from 'react-dom';


class walletBalance extends React.Component {
    componentDidMount(props) {
        const key = props;
        const requestOptions = {
            method: 'POST',
            headers: { 'x-api-key': 'PDprxfeN6h773d3G9RvBN2zp6H79R0tjp17Fhd0d'},
            body: JSON.stringify({ accountKey: key })
        }.fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            const Abalance = data.assetBalance;
            const Cbalance = data.cashBalance; 
            render(); {
                return(
                    <div classname= 'Balances'>
                    <h2>Asset Balance: {Abalance}</h2>
                    <h2>Cash Balance: {Cbalance} </h2>
                    </div>);
            }
        })
    } 
    }

export default walletBalance
