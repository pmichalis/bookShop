import React from 'react';

class AdminBookListing extends React.Component {

    constructor() {
        super();
        this.setState = {
            books : [],
        }
   
    }

    render() {

        let list;

       if(this.props.books){
            list = <ol>{this.props.books.map((book) => <li key= {book.name}>{book.name}  {book.author}</li>)}</ol>
       } else {
            list = <div>No Books in base</div>
       }
       return (
           <div>
            {list}
           </div>
       )
}
}

export default AdminBookListing;