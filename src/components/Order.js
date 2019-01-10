import React from 'react';
import OrderView from './OrderView';




class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: ""
        }
    }
    handleChange(){
        let totalPrice = this.props.book.price +1
        this.setState({totalPrice:totalPrice})
    }
   
    render() {
        const orderedBooks = this.props.order.map( order => {
            return <OrderView book={order} 
            removeFromOrder={this.props.removeFromOrder}
            />
        })


        return (
        <div className="order col-md-6">
            <h2>Your order:</h2>
           {orderedBooks}
           <h6>Your order price: {this.state.totalPrice} pln</h6>
            
        </div>
        );
    }
}

export default Order;