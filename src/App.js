import logo from './logo.svg';
import './App.css';
import {TopNav} from "./TopNav";
import {Main} from "./Main";
import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import handleScroll from "aos/src/js/helpers/handleScroll";

function App() {//console.log(window.pageYOffset,window.scrollY);//0 0
    const [y,setY]=useState(0);
    const handleY=()=>{ //console.log(y);//0
    //console.log(window.pageYOffset,window.scrollY);
        setY(window.pageYOffset);
    } //ok
    //useEffect( ()=>{window.addEventListener("scroll",handleY)},[]); //ok
    ////useEffect(handleY,[window.pageYOffset]);
    /*useEffect(() => { //ok combined with addEventListener
        return () => {
            window.removeEventListener("scroll",handleY);
        }
    }, []);*/
    useEffect(() => {
        const handleYScrolling=(event)=>{console.log(window.pageYOffset,window.scrollY);setY(window.scrollY)}
        document.addEventListener('scroll',handleYScrolling)
        return () => {
            document.removeEventListener("scroll",handleYScrolling);
        }
    }, [setY,y])
    useEffect(()=>{AOS.init({
        duration : 2000
    })},[]);
  return (
      <div>
          <div className={y===0?"AppTransparent-bg":"App-bg"}>
              <div className={y===0?"AppTransparent":"App"}>
                  {y==0?<img src={logo} className="App-logo" alt="logo" />:<></>}
                  <TopNav y={y}/>
              </div>
          </div>

          <Main y={y}/>
      </div>
  );
}

export default App;
