import React from 'react';
import "./Skills.css";

export const Skills = () =>{
    return (
        <div id="Skills" className="skills-container" >
            <h1 className="heading">What I Can do &nbsp;&nbsp;?</h1>

            <div className="techs" data-aos="zoom-in-up">
                <li>
                    <i className="fab html fa-html5"></i>
                    <p>HTML5</p>
                </li>
                <li>
                    <i className="fab css fa-css3"></i>
                    <p>CSS3</p>
                </li>
                <li>
                    <i className="fab javascript fa-js"></i>
                    <p>Javascript</p>
                </li>
                <li>
                    <i className="fab react fa-react"></i>
                    <p>React</p>
                </li>
                <li>
                    <i className="fab java fa-java"></i>
                    <p>Java</p>
                </li>
            </div>
        </div>
    );
}