import React,{useRef} from 'react';
import './TopNav.css';
import {NavHashLink} from "react-router-hash-link";

export const TopNav =() =>{
 /*   const contactRef = React.useRef();
    const scrollView=(myRef) =>{ console.log("hehe",myRef);
        myRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }*/
    return (
        <div className="bar-container">
            <ul className="TopRightBar">
                <li><NavHashLink smooth to="/XW/SDE#Home">Home</NavHashLink></li>
                <li><NavHashLink smooth to="/XW/SDE#AboutMe">About Me</NavHashLink></li>
                <li><NavHashLink smooth to="/XW/SDE#Portfolio">Portfolio</NavHashLink></li>
                <li><NavHashLink smooth to="/XW/SDE#Skills">Skills</NavHashLink></li>
                <li><NavHashLink smooth to="/XW/SDE#ContactMe">Contact Me</NavHashLink></li>
            </ul>
        </div>
    );
}
//<li><div ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me</div></li>
//<li ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me></li>