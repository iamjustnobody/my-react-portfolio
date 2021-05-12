import React from 'react';
import {Home} from './Sections/Home';
import {AboutMe} from "./Sections/AboutMe";
import {Skills} from "./Sections/Skills";
import {Portfolio} from "./Sections/Portfolio";
import {ContactMe} from "./Sections/ContactMe";
import "./Main.css";
import {SkillCards} from "./Sections/SkillCards";
import {ProjectCards} from "./Sections/ProjectCards";

export const Main =React.forwardRef((props,ref)=>{
    const {ref1,ref2,ref3,ref4,ref5}=ref
    return (
        <div className="content-container">
            <Home id='home' ref={ref1}/>
            <div>
                <AboutMe id='aboutMe' ref={ref2}/>
                <SkillCards id='skillCards' ref={ref3}/>
                <ProjectCards id='projectCards' ref={ref4}/>
                <ContactMe id='contactMe' ref={ref5}/>
            </div>
        </div>
    );
    /*return (
        <div className="content-container">
            <Home id='home' homeRef={props.homeState}/>
            <div>
                <AboutMe id='aboutMe' amRef={props.aboutmeState}/>
                <SkillCards setGlobalBlur={props.setGlobalBlur} globalBlur={props.globalBlur} id='skillCards' scRef={props.skillcardsState}/>
                <ProjectCards setGlobalBlur={props.setGlobalBlur} globalBlur={props.globalBlur} id='projectCards' pcRef={props.projectcardsState}/>
                <ContactMe id='contactMe' cmRef={props.contactmeState}/>
            </div>
        </div>
    );*/
})
/*
<div className="content-container">
            <Home />
            <div className="content-container">
                <AboutMe />
                <Skills />
                <Portfolio />
                <ContactMe />
            </div>
        </div>
 */
/*
            <div className="content-container">
                <Home />
                <AboutMe />
                <Skills />
                <Portfolio />
                <ContactMe />
            </div>
 */