import React from 'react';

class AddTransaction extends React.Component {
    state={accKey:'',order:'',amount:null};

    onAddTransact = (event) => {
        event.preventDefault();
        this.props.ontransact(this.state.accKey,this.state.order,this.state.amount);
        console.log(this.state.accKey,this.state.order,this.state.amount);
    }
    handleChange(event) {
        this.setState({order: event.target.value});
      }


    render() {
        return (
            <form className="ui form" onSubmit={this.onAddTransact}>
                <div className="field">
                    <label>Account Key: </label>
                    <input type="text" placeholder="Acc Key" onChange={(e)=>this.setState({accKey:e.target.value})} />
                </div>
                <div className="field">
                    <label>Order Type BUY or SELL: </label>
                    <input type="text" placeholder="BUY or SELL" onChange={(e)=>this.setState({order:e.target.value})} />
                </div>
                <div className="field">
                    <label>Asset Amount incl 2dp: </label>
                    <input type="number" placeholder="Asset Amount " onChange={(e)=>this.setState({amount:e.target.value})} />
                </div>
                <button className="ui button" type="submit">Add Transaction</button>
            </form>
        )
    }
}

export default AddTransaction;