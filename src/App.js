import logo from './logo.svg';
import './App.css';
import {TopNav} from "./TopNav";
import {Main} from "./Main";
import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [y,setY]=useState(0);
    const handleY=()=>{ //console.log(y);
        setY(window.pageYOffset);
    }
    useEffect( ()=>{window.addEventListener("scroll",handleY)},[]);
    useEffect(handleY,[window.pageYOffset]);
    useEffect(() => {
        return () => {
            window.addEventListener("scroll",handleY);
        }
    }, []);
    useEffect(()=>{AOS.init({
        duration : 2000
    })},[]);
  return (
      <div>
              <div className={y===0?"AppTransparent":"App"}>
                  <img src={logo} className="App-logo" alt="logo" />
                  <TopNav />
              </div>


          <Main />
      </div>
  );
}

export default App;
