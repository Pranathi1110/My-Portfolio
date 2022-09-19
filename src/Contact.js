import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Contact extends Component {
    render() {
        return(
            
            <section id="contact" className="contact">
            <div className="container">
                <h2>Contact me</h2>
                
                
                <div className="card-container" >
                
                <div className="mail-container">
                    <h3><FontAwesomeIcon icon={["fa","envelope"]} size="3x" color=" rgb(100, 164, 164)"/><br></br>Email</h3>
                    <a  style={{color:"rgb(100, 164, 164)"}}>gurijalapranathi21@gmail.com</a>
                    </div>
                    
                    
                <div className="linkedin-container">
                    <h3><FontAwesomeIcon icon={["fab","linkedin"]} size="3x" color=" rgb(100, 164, 164)"/><br></br>Linkedin</h3>
                    <a href="https://www.linkedin.com/in/gurijala-pranathi-54421b214/" style={{color:"rgb(100, 164, 164)"}}>gurijala pranathi</a>
                    </div>
                <div className="github-container">
                    <h3><FontAwesomeIcon icon={["fab","github"]} size="3x" color=" rgb(100, 164, 164)"/><br></br>Github</h3>
                    <a href="https://github.com/Pranathi1110/" style={{color:"rgb(100, 164, 164)"}}>Pranathi1110</a>
                    </div>
                </div>
            </div>   
            </section>
            
        )
    }
}

export default Contact;