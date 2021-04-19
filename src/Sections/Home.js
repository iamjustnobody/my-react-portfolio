import React from 'react';
import particle_options from "../ParticleOptions.json";
import Particles from 'react-tsparticles';
import "./Home.css";

export const Home =()=>{
    return (
        <div id="Home" className="home-container">
            <Particles id="tsparticles" options={particle_options} />
        </div>

    );
}