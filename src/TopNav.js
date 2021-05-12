import React, {useEffect, useRef} from 'react';
import './TopNav.css';
import {NavHashLink} from "react-router-hash-link";

export const TopNav =React.forwardRef((props,ref) =>{
 /*   const contactRef = React.useRef();
    const scrollView=(myRef) =>{ console.log("hehe",myRef);
        myRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }*/


//<li className={props.y>=0&&props.y<150?(props.y==0?'selected top':'selected'):''}>
    //<li className={props.y>=150&&props.y<850?'selected':''}> <li className={props.y>=850&&props.y<1400?'selected':''}>
//<li className={props.y>=1400&&props.y<2075?'selected':''}> //className={props.y>=2075?
    return (
        <div className="bar-container" ref={ref}>
            <ul className="TopRightBar">
                <li className={`${props.visibleSection === "home" ? "selected" : ""}`}>
                    <NavHashLink smooth to="/XW/SDE#Home" style={{textDecoration:'none'}} className={props.y==0?'top':''}>
                        Home
                    </NavHashLink>
                </li>
                <li className={props.visibleSection === "aboutMe" ? "selected" : ""}>
                    <NavHashLink smooth to="/XW/SDE#AboutMe" style={{textDecoration:'none'}} className={props.y==0?'top':''}>
                        About Me
                    </NavHashLink>
                </li>
                <li className={props.visibleSection==='skillCards'?'selected':''}>
                    <NavHashLink to="/XW/SDE#Skills" scroll={el=>el.scrollIntoView({behavior:'smooth'})}
                                 style={{textDecoration:'none'}} className={props.y==0?'top':''}>
                        Skills
                    </NavHashLink>
                </li>
                <li className={props.visibleSection==='projectCards'?'selected':''}>
                    <NavHashLink smooth to="/XW/SDE#Portfolio" style={{textDecoration:'none'}} className={props.y==0?'top':''}>
                        Portfolio
                    </NavHashLink>
                </li>
                <li className={props.visibleSection==='contactMe'?'selected':''}>
                    <NavHashLink smooth to="/XW/SDE#ContactMe" style={{textDecoration:'none'}} className={props.y==0?'top':''}>
                        Contact Me
                    </NavHashLink>
                </li>
            </ul>
        </div>
    );
})
//style={props.y>=537&&props.y<1152? {fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}} with navhashlink ok
// but already has style={{textDecoration:'none'}} in navhashlink - could move above line of code to li (outside navhashlink instead
//opt scroll={el=>el.scrollIntoView({behavior:'instant',block:'end'})}
//<li><div ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me</div></li>
//<li ref={contactRef} onClick={()=>{scrollView(contactRef)}}>Contact Me></li>
/*<li style={props.y>=150&&props.y<850? {fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}}></li>
                <li className={props.y>=850&&props.y<1400?'selected':''}>
                    <NavHashLink to="/XW/SDE#Skills" scroll={el=>el.scrollIntoView({behavior:'smooth'})} style={{textDecoration:'none'}}
                                 activeStyle={props.y>=850&&props.y<1400?{fontWeight:'bold',borderBottom:'5px solid red',color:'red'}:{}}
                                 className={props.y>=850&&props.y<1400?'selected':''}>
                        Skills
                    </NavHashLink>
                </li>
 */
//<NavHashLink smooth to="/XW/SDE#ContactMe" style={{textDecoration:'none'}} className={props.y>=2075?'selected':''}>
//<ul className={props.y==0?"TopRightBar top":"TopRightBar"}> for color white or darkolivegreen; need to set @a in css or @navhashlink as styles={{}} in js here

//<NavLink to="#about" activeClassName={"active"} className={"anything"}>About</NavLink>
// className: always; activeClassName: for to='url' (for jumpTo & url)
//if activeClassName={"selected"} then navLink bottom line NOT li bottom line; className={"selected"} always selected css