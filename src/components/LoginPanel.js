import React from 'react';
import {firebaseApp} from '../fbase';

class LoginPanel extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.props.changeLoggedIn(true);
                })
            .catch( () => {
                console.log('Unable to authenticate');
            })
        }
    handleLoginChange = (event) => { 
    
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    render(){
        return(
            <div className="adminPanel">
                <h2>Admin Panel</h2>
                    <form onSubmit={this.authenticate}>
                        <input type="text" placeholder="E-mail" id="email_bs" name="email" className="form-control" 
                            onChange={this.handleLoginChange} value={this.state.email}/>
                        <input type="password" placeholder="Password" id="password_bs" name="password" className="form-control" 
                            onChange={this.handleLoginChange} value={this.state.password}/>
                        <div className="adminLogginButtons">
                            <button type="submit" className="btn btn-primary loggin">Log in</button>
                            <a href="javascript:history.back();" className="btn btn-danger loggin">Back</a>
                         </div>
                    </form>
                </div>

        )
    }
}
export default LoginPanel;