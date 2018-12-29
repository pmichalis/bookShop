import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

    constructor(){
        super();
        this.state = {
            projectAuthorName : " programmed by P.Michalis",
            clicked : true,
            textColor : "white",
            backgroundColor : "black"

        }
    }
    handleClick = () => {

        if(this.state.clicked) {
            this.setState({
                projectAuthorName : " programmed by P.Michalis",
                textColor : "black",
                backgroundColor : "white"
            })
        } else {
            this.setState({
                projectAuthorName : " programmed by P.Michalis",
                textColor : "white",
                backgroundColor : "black"
            })
        }
        this.setState({
            clicked : !this.state.clicked
        })
    }



    render() {

        let  footerCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }

        return ( 
            <div className="row footer" style={footerCss} onClick={this.handleClick}>
                <p>{this.state.projectAuthorName}</p>
            </div>
        );
    }
}

export default Footer;