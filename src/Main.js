import React from 'react';
import {Home} from './Sections/Home';
import {AboutMe} from "./Sections/AboutMe";
import {Skills} from "./Sections/Skills";
import {Portfolio} from "./Sections/Portfolio";
import {ContactMe} from "./Sections/ContactMe";
import "./Main.css";

export const Main =()=>{
    return (
        <div className="content-container">
            <Home />
            <div>
                <AboutMe />
                <Skills />
                <Portfolio />
                <ContactMe />
            </div>
        </div>
    );
}
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