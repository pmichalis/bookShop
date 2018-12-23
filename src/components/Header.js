import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor(){
        super();
        this.state = {
            bookstoreName : "Black Books",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"

        }
    }
    handleClick = () => {

        if(this.state.clicked) {
            this.setState({
                bookstoreName : "White Books",
                textColor : "black",
                backgroundColor : "white"
            })
        } else {
            this.setState({
                bookstoreName : "Black Book",
                textColor : "white",
                backgroundColor : "black"
            })
        }
        this.setState({
            clicked : !this.state.clicked
        })
    }



    render() {

        let  headerCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }

        return ( 
            <div className="row header" style={headerCss} onClick={this.handleClick}>
                <h1>{this.state.bookstoreName}</h1>
                <Link to="/admin">Admin panel</Link>
            </div>
        );
    }
}

export default Header;