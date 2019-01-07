import React from 'react';
export default class AdminBookView extends React.Component {


    render() {
        return (
            <div className="orderView row">
            <div className="col-xs-8">
                <span>
                    Book name: {this.props.book.name} <br/> 
                    Book author: {this.props.book.author} <br/> 
                    Book price: {this.props.book.price}
                </span>
            </div>
            <div className="col-xs-2">
                <button className="btn btn-primary" onClick={ (event) => this.props.sendBookToEdit(this.props.book)}>Edit Item</button>
            </div>
            <div className="col-xs-2">
                <button className="btn btn-primary" onClick={ (event) => this.props.removeFromInventory(this.props.book.name)}>Remove from firebase</button>
            </div>
            </div>
                
        );
    }
    
}