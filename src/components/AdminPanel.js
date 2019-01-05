import React from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';
import AdminBookListing from './AdminBookListing';
import {fbase} from '../fbase';


class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false,
            editMode : false,
            bookToEdit : {}
        };
    };

    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

    addNewBook = (book) => {
        if (Array.isArray(this.state.books)) {
            this.setState({
                books : [...this.state.books, book],
            })
        } else {
            this.setState({
                books : [book],
            })

        }
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

   removeFromInventory = (title) => {
    this.setState({
        books: this.state.books.filter( book => title!==book.name )
    })
}

editBook = (bookToEdit) => {
    this.setState({
        editMode : true,
        bookToEdit : bookToEdit
    });
}
    render() {

        return (
            <div>
            {!this.state.loggedIn &&
               <LoginPanel changeLoggedIn = {this.changeLoggedIn}/>
            }
            {this.state.loggedIn && 
                <React.Fragment>
                    <AddBookForm 
                    addNewBook = {this.addNewBook} 
                    editMode = {this.state.editMode}
                    book = {this.state.bookToEdit}
                    />
                    <AdminBookListing 
                    books = {this.state.books} 
                    removeFromInventory = {this.removeFromInventory}
                    editBook = {this.editBook}
                    />
                    
                </React.Fragment>
            }
            </div>
        )}
}

export default AdminPanel;