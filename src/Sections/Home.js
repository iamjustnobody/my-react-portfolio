import React from 'react';
import particle_options from "../ParticleOptions.json";
import Particles from 'react-tsparticles';
import "./Home.css";

export const Home =React.forwardRef((props,ref)=>{
    return (
        <div id="Home" className="home-container" ref={ref}>
            <Particles id="tsparticles" options={particle_options} />
        </div>

    );
})