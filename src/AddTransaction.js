import React from 'react';

class AddTransaction extends React.Component {
    state={accountKey:'',orderType:'',assetAmount:null};

    onAddTransact = (event) => {
        event.preventDefault();
        this.props.ontransact(this.state.accountKey,this.state.orderType,this.state.assetAmount);
    }


    render() {
        return (
            <form className="ui form" onSubmit={this.onAddTransact}>
                <div className="field">
                    <label>Account Key: </label>
                    <input type="text" placeholder="Acc Key" onChange={(e)=>this.setState({accountKey:e.target.value})} />
                </div>
                <div className="field">
                    <label>Order Type BUY or SELL: </label>
                    <input type="text" placeholder="BUY or SELL" onChange={(e)=>this.setState({orderType:e.target.value})} />
                </div>
                <div className="field">
                    <label>Asset Amount incl 2 decimal place: </label>
                    <input type="number" step="0.01" placeholder="Asset Amount " onChange={(e)=>this.setState({assetAmount:e.target.value})} />
                </div>
                <button className="ui button" type="submit">AddTransaction</button>
            </form>
        )
    }
}

export default AddTransaction;