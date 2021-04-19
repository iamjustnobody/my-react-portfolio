import React from 'react';
import "./AboutMe.css";
import wordcloud1 from '../wordcloud1.png';
//https://www.youtube.com/watch?v=hZqj_8_m1gE

export const AboutMe = () =>{
    return (
        <div id="AboutMe" className="aboutme-container">
            <div className="card"
                 data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000">
                <div className="sides left-side">
                    <h1 className="name">Xiaxin </h1>
                    <h3 className="profession">Software</h3>
                </div>
                <div className="sides right-side">
                    <h1 className="name">Wu </h1>
                    <h3 className="profession">Engineer</h3>
                </div>
                <div className="back-side">
                    <p className="biography"> i am keen! </p>
                </div>
            </div>
        </div>
    );
}