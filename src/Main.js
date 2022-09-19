import React, {Component} from "react";
import {Routes,Route,NavLink,Link,HashRouter} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {library} from "@fortawesome/fontawesome-svg-core";
import{fab,faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import{faEnvelope} from "@fortawesome/free-solid-svg-icons"

library.add(fab,faEnvelope,faLinkedin,faGithub);

class Main extends Component{
    render(){
        return(
        <HashRouter>
        <header id="header">
        <div>
        <div>
            <Link className="logo" to="/">Gurijala Pranathi</Link>
            </div>
            <div className="container" style={{ padding:"1.5rem 1.5rem",margin:"auto",overflow:"hidden"}}>
            <div className="mobile-menu-links"style={{alignitems: "centre"}}>
            <ul className="flex" style={{display:"flex",justifyContent: "center", alignItems: "center", listStyleType:"none",fontSize:"x-large",position:"relative"}}>
                <li><NavLink to="/" className="link">Home</NavLink></li>
                <li><NavLink to="/about" className="link">About</NavLink></li>
                <li><NavLink to="/contact" className="link">Contact</NavLink></li>
            </ul>
            </div>
            </div>
            <div className="content">
            <Routes>
            <Route  exact path="/" element={<Home />} />
            <Route  path="/About" element={<About />} />
                <Route  path="/Contact" element={<Contact />} />
                </Routes>

            </div>
        </div>
        </header>
        </HashRouter>
        );
    }
}

export default Main;