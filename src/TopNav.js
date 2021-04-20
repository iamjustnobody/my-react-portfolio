import React,{useRef} from 'react';
import './TopNav.css';
import {NavHashLink} from "react-router-hash-link";

export const TopNav =(props) =>{
 /*   const contactRef = React.useRef();
    const scrollView=(myRef) =>{ console.log("hehe",myRef);
        myRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }*/
    return (
        <div className="bar-container">
            <ul className="TopRightBar">
                <li>
                    <NavHashLink smooth to="/XW/SDE#Home" style={{textDecoration:'none'}}
                                 activeClassName={props.y>=0&&props.y<537?'selected':''} className={props.y>=0&&props.y<537?'selected':''}>
                        Home
                    </NavHashLink>
                </li>
                <li style={props.y>=537&&props.y<1152? {fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}}>
                    <NavHashLink smooth to="/XW/SDE#AboutMe" style={{textDecoration:'none'}}
                                 activeClassName={props.y>=537&&props.y<1152?'selected':''} className={props.y>=537&&props.y<1152?'selected':''}>
                        About Me
                    </NavHashLink>
                </li>
                <li className={props.y>=1152&&props.y<1799?'selected':''}>
                    <NavHashLink to="/XW/SDE#Skills" scroll={el=>el.scrollIntoView({behavior:'smooth'})} style={{textDecoration:'none'}}
                                 activeStyle={props.y>=1152&&props.y<1799?{fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}}
                                 className={props.y>=1152&&props.y<1799?'selected':''}>
                        Skills
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink smooth to="/XW/SDE#Portfolio" style={{textDecoration:'none'}}
                                 activeStyle={props.y>=1799&&props.y<2522?{fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}}
                                 className={props.y>=1799&&props.y<2522?'selected':''}>
                        Portfolio
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink smooth to="/XW/SDE#ContactMe" style={{textDecoration:'none'}}
                                 className={props.y>=2522?'selected':''}>
                        Contact Me
                    </NavHashLink>
                </li>
            </ul>
        </div>
    );
}
//style={props.y>=537&&props.y<1152? {fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}} with navhashlink ok
// but already has style={{textDecoration:'none'}} in navhashlink - could move above line of code to li (outside navhashlink instead
//opt scroll={el=>el.scrollIntoView({behavior:'instant',block:'end'})}
//<li><div ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me</div></li>
//<li ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me></li>