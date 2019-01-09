import React from 'react';


export default class OrderView extends React.Component {
   

    render() {
        return (
            <div className="orderView row">
            <div className="col-xs-8">
                <span><strong>{this.props.book.name} </strong></span><br/>
                <i>Author: {this.props.book.author}</i><br/>
                ><strong>Price: {this.props.book.price} PLENY</strong>
            </div>
            <div className="col-xs-4">
                <button className="btn btn-primary" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
            </div>
            </div>
                
        );
    }
    
}