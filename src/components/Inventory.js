import React from 'react';
import BookView from './BookView';
import {fbase} from '../fbase';

class Inventory extends React.Component {
    
    constructor(){
        super();
        this.state = {}
    }
    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
   }

   componentWillUnmount() {
       fbase.removeBinding(this.ref);
   }
    
    render() {

        let bookListing = <h3>No books on firebase!</h3>

        if(Array.isArray(this.state.books))
            bookListing = this.state.books.map( book => {
                return <BookView book={book} addToOrder={this.props.addToOrder}/>
        });


        
        return (
        <div className="inventory col-md-6">
                <h2>bookstore inventory:</h2>
                {bookListing}
        </div>
        );
    }
}

export default Inventory;