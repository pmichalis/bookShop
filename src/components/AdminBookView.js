import React from 'react';
export default class AdminBookView extends React.Component {


    render() {
        return (
            <div className="orderView row">
            <div className="col-xs-8">
                <span>{this.props.book.name} {this.props.book.author}</span>
            </div>
            <div className="col-xs-4">
                <button className="btn btn-primary" onClick={ (event) => this.props.removeFromInventory(this.props.book.name)}>Remove</button>
            </div>
            </div>
                
        );
    }
    
}