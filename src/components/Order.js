import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
    constructor() {
        super();
        this.state = {
            totalPrice : 0
        };
      }
      handleClick(){
        this.setState({
            totalPrice : +1//doesnt work
        })
    }
   
    render() {
        const orderedBooks = this.props.order.map( order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>
        })

        return (
        <div className="order col-md-6">
            <h2>Your order:</h2>
           {orderedBooks}
           <h6>Your order price: {this.state.totalPrice} pln</h6>
           <button type="button" onClick={this.handleClick.bind(this)}> Przelicz </button>
           
        </div>
        );
    }
}

export default Order;