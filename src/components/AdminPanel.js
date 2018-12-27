import React from 'react';
import {fbase, firebaseApp} from '../fbase';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books : [],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            },
            loggedIn : false,
            email: "",
            password: ""
        };
    };

    handleLoginChange = (event) => { 
    
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleChange = (event) => {

        let newBook;

        if(event.target.name==="onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }

        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {

        event.preventDefault();

        let newBook = { ...this.state.book };

        // this.props.addBook(newBook);

        this.setState({
            books : [...this.state.books, newBook],
            book : {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            }
        });
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
    //firebase authorization
    
    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.setState({
                    loggedIn: true
                })
            })
            .catch( () => {
                console.log('Unable to authenticate');
            })
    }


    render() {

        return (
            <div>
            {!this.state.loggedIn &&
                <div className="adminPanel">
                <h2>Admin Panel</h2>
                    <form onSubmit={this.authenticate}>
                        <input type="text" placeholder="E-mail" id="email_bs" name="email" className="form-control" 
                            onChange={this.handleLoginChange} value={this.state.email}/>
                        <input type="password" placeholder="Password" id="password_bs" name="password" className="form-control" 
                            onChange={this.handleLoginChange} value={this.state.password}/>
                        <div className="adminLogginButtons">
                            <button type="submit" className="btn btn-primary loggin">Log in</button>
                            <a href="javascript:history.back();" class="btn btn-danger loggin">Back</a>
                         </div>
                    </form>
                </div>
            }
            {this.state.loggedIn && 
                <div className="adminpanel col-md-4">
                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                                onChange={this.handleChange} value={this.state.book.name} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                                onChange={this.handleChange} value={this.state.book.author} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Book description" id="description" name="description" className="form-control"
                                onChange={this.handleChange} value={this.state.book.description} />
                        </div>
                        <div className="form-group">
                            <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                                onChange={this.handleChange} value={this.state.book.onStock} />
                            <label htmlFor="onStock" className="form-check-label">On stock</label>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                                onChange={this.handleChange} value={this.state.book.image} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            }
            </div>
        )}
}

export default AdminPanel;