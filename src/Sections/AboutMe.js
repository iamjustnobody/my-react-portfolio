import React, {useEffect, useState} from 'react';
import "./AboutMe.css";
import wordcloud1 from '../wordcloud1.png';
import createArrayWithElements from "aos/src/js/helpers/elements";
//https://www.youtube.com/watch?v=hZqj_8_m1gE

export const AboutMe = () =>{
    const text=["applying for a SWE job",
        "an Electrical & Electronic Engineer",
        "a Nuclear Fuel route C&I Engineer",
        "keen to find out what else I can do"]
    //const text=["ABCD","EDF","CAAC"]
    const[intervalId,setIntervalId]=useState();

    const[txtIndex,setTxtIndex]=useState(0)
    const[countChars,setCountChars]=useState(0)
/*
    useEffect(() => {
        const intervalID=setTimeout(handleTxt,5500); //()=>{handleTxt()} or ()=>handleTxt() //not setInterval
        setIntervalId(intervalID)
        return () => {
            clearInterval(intervalId)
        }
    }, [txtIndex]) //or [txtIndex,setTxtIndex]

    const handleTxt= ()=>{ //console.log(text.length)
        const newTxtIndex= ((txtIndex+1)==text.length?0:(txtIndex+1));
      //  console.log('new',newTxtIndex)
        setTxtIndex(newTxtIndex)//setTxtIndex((txtIndex+1))
       // console.log(txtIndex)
    }*/
    /*
    useEffect(() => {
        const intervalID=setTimeout(handleTxt,100); //()=>{handleTxt()} or ()=>handleTxt() //not setInterval
        setIntervalId(intervalID)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    const dynamicTxt=document.querySelector(".dynamic-txt")

    const handleTxt= async()=>{console.log(countChars)
        if(countChars<text[txtIndex].length-1){
            await setCountChars(countChars+1)
            setTimeout(handleTxt,150000000)
            //dynamicTxt.textContent+=text[].charAt()
        }else{
            setTimeout(handleTxtRemoval,200000000)
        }
    }
    const handleTxtRemoval=async()=>{console.log(countChars)
        if(countChars>0){
            await setCountChars(countChars-1)
            setTimeout(handleTxtRemoval,100000000)
        }else{
            await setTxtIndex((txtIndex+1)==text.length?0:(txtIndex+1))
            await setCountChars(0)
            setTimeout(handleTxt,100000000)
        }
    }*/

    const [erasing,setErasing]=useState(false)
    useEffect(() => {
        const intervalID=setTimeout(handleTxt,50); //()=>{handleTxt()} or ()=>handleTxt() //not setInterval
        setIntervalId(intervalID)
        return () => {
            clearInterval(intervalId)
        }
    }, [countChars,txtIndex,erasing]) //erasing opt

    const handleTxt=async ()=>{ //console.log(countChars)
        /*if(erasing){
            if(countChars>0) await setCountChars(countChars-1)
            else{
                await setTxtIndex((txtIndex+1)==text.length?0:(txtIndex+1))
                await setErasing(!erasing)
            }
        }else{
            if(countChars<text[txtIndex].length-1)await setCountChars(countChars+1)
            else{
                await setCountChars(0)
                await setErasing(!erasing)
            }
        }*/
        if(countChars>=0&&countChars<=text[txtIndex].length-1){
            if(erasing){ await setCountChars(countChars-1)}
            else  await setCountChars(countChars+1)
        }else if(countChars<0){
            if(erasing){
                await setTxtIndex((txtIndex+1)==text.length?0:(txtIndex+1))
                await setCountChars(0)
                await setErasing(!erasing)
            }
        }else{ //console.log(erasing)
            if(!erasing) setTimeout( async ()=> await setErasing(!erasing),700)
            else await setCountChars(countChars-1)
        }
    }

    return (
        <div id="AboutMe" className="aboutme-container">
            <h1 className="heading">About me</h1>
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
                    <div className="biography">
                        <div className='static-txt'> I am </div>
                        <div className='dynamic-txt'>{countChars==-1?"":text[txtIndex].substring(0,countChars+1)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}