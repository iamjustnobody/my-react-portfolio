import React from 'react';
import "./Portfolio.css";

export const Portfolio = () =>{
    return (
        <div id="Portfolio" className="portfolio-container">
            <h1 className="heading">Project</h1>
            <div className='projects-container'>
                <div className='project'>
                    <div className='project-image' id='first'></div>
                    <div className='project-title'><h2>ever-note</h2></div>
                    <div className='project-githubCodes'>
                        <a href="">
                            <i className="fab fa-github" title="github repo" id="github">
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
//<a><div>
//<a><img>
//<div onClick> or <img onClick>