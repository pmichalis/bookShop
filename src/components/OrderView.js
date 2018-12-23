import React from 'react';


export default class OrderView extends React.Component {


    render() {
        return (
            <div className="OrderView">
                <span>{this.props.book.name}</span>
                <button className="btn btn-primary" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
            </div>
                
        );
    }
    
}