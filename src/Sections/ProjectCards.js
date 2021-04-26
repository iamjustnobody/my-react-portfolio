import React, {useEffect, useState} from 'react';

//import "./ProjectCards.css"; //moved below swiper CSS
import imgsrcurl1 from '../static/images/unnamed.png' // relative path to image
import imgsrcurl2 from '../static/images/0709.jpg_wh860.jpg'


// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper';

//import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper from "https://unpkg.com/swiper/swiper-bundle.min.js" //need to npm install swiper for react
import Swiper from "swiper";

// Import Swiper styles
/*
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/components/navigation/navigation.scss';
import '../../node_modules/swiper/components/pagination/pagination.scss';
import '../../node_modules/swiper/components/scrollbar/scrollbar.scss';
import '../../node_modules/swiper/components/effect-coverflow/effect-coverflow.scss';
import '../../node_modules/swiper/swiper-bundle.min.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
 */ //should import min.css instead

import 'swiper/swiper-bundle.min.css' //comes first
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
  //move to index css b4 all css - no need - just move b4 projectcards css
import "./ProjectCards.css";


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]);

export const ProjectCards = (props) =>{
    const gallery=[{
        projImgId:'first',
        projImgSrc:imgsrcurl1,
        projTitle:"ever-note",
        projSummary:"this is js project",
        projModal:[{
            imgSrc:"http://static.runoob.com/images/demo/demo1.jpg",
            imgTxt:"Nature and sunrise",
            innerModalShown:true
        },{
            imgSrc:"http://static.runoob.com/images/demo/demo2.jpg",
            imgTxt:"Trolltunga, Norway",
            innerModalShown:false
        }],
        modalShown:false
    },{
        projImgId: "second",
        projTitle: 'localFav',
        projImgSrc:imgsrcurl2,
        projSummary:"this is js project",
        projModal:[{
            imgSrc:"http://static.runoob.com/images/demo/demo3.jpg",
            imgTxt:"Mountains and fjords",
            innerModalShown:true
        },{
            imgSrc:"http://static.runoob.com/images/demo/demo4.jpg",
            imgTxt:"Northern Lights",
            innerModalShown:false
        }],
        modalShown:false
    },{
        projImgId: "third",
        projTitle: 'localFav',
        projImgSrc:imgsrcurl2,
        projSummary:"this is js project",
        projModal:[{
            imgSrc:"http://static.runoob.com/images/demo/demo3.jpg",
            imgTxt:"Mountains and fjords",
            innerModalShown:true
        },{
            imgSrc:"http://static.runoob.com/images/demo/demo4.jpg",
            imgTxt:"Northern Lights",
            innerModalShown:false
        }],
        modalShown:false
    }]

    const [projGallery,setProjGallery]=useState(gallery)
    const [globalSwiperShownIndicator,setGlobalSwiperShownIndicator]=useState(false)
    const handleModal=async (index)=>{ //console.log('before modal open',projGallery);
        await setProjGallery(projGallery.map(((el,id)=>{
            //if(index==id){el.modalShown=!el.modalShown}
            //return el
            if(index==id){return {...el,modalShown:!el.modalShown}} //console.log(el.modalShown);
            return el
        })))
        await setGlobalSwiperShownIndicator(!globalSwiperShownIndicator)
    }

    /*const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });*/

    const settings={
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 38,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
    }


    const [swiper,setSwiper]=useState()
    useEffect(()=>{
        setSwiper(new Swiper('.swiper-container',settings))
    },[globalSwiperShownIndicator,setGlobalSwiperShownIndicator])


    return (
        <div id="Portfolio" className="portfolio-container">
            <h1 className="heading">Project</h1>
            <div className='projects-container'>
                {projGallery.map((_el,_index)=>{
                    return <>
                                <div className='project-card' data-aos="fade-up" data-aos-easing="linear"
                                     data-aos-duration="1500">
                                    <div className='imgBox'>
                                        <img className='imgBx-image' src={projGallery[_index].projImgSrc} onClick={()=>{handleModal(_index)}}/>
                                    </div>
                                    <div className='project-content'>
                                        <div className='project-title'><h2>{_el.projTitle}</h2></div>
                                        <div className='project-githubCodes'>
                                            <a href="">
                                                <i className="fab fa-github" title="github repo" id="github">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {_el.modalShown?
                                <div className='swiperModal' id='mySwiperModal'>
                                    <span className="swiperClose" onClick={()=>{handleModal(_index)}}>&times;</span>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {_el.projModal?_el.projModal.map((_slide,_id)=>(
                                                <div className="swiper-slide" ><img src={_slide.imgSrc}/></div>
                                            )):<></>}
                                        </div>

                                        <div className="swiper-pagination"></div>
                                    </div>


                                </div> :<></>}

                            </>
                })}
            </div>

        </div>
    );
}
//or project-card having slibing project-card-bg & both inside of new outer project-box container (relative); both overlap nearly
// (absolute;width&height=100%;top&left=0) then different +ve z-index but lower z-index reset top&left&bottom&right to negative px to expand (linear-gradient shadow)
//whilst higher index has exact size of project-box to cover the whole main area ensuring the background (color) remains darkblurblack
//negative z-index not working here
/*
<div className="swiper-slide" style={{backgroundImage:url("../static/images/0709.jpg_wh860.jpg")}} but url not defined & cannot use URL
 */
//style={{backgroundImage:"../static/images/0709.jpg_wh860.jpg"}} wrong
// style={{backgroundImage:'url(../static/images/0709.jpg_wh860.jpg)'}} wrong
//style={{backgroundImage:'url("../static/images/0709.jpg_wh860.jpg")'}} ok but need to rquire image picture first then using `${}`//
//but not style={{backgroundImage:'url(`${imgsrcurl1}`)'}}
//<div className="swiper-slide" style={{backgroundImage:`url(${imgsrcurl1})`}}>slid 1</div> OKOK
//<div className="swiper-slide"><img src={imgsrcurl1}/></div> OKOK
//better use <div className="swiper-slide"><img src={_slide.imgSrc}/></div>
// or <div className="swiper-slide" style={{backgroundImage:`url(${_slide.imgSrc})`}}></div> but better use above
/*
<div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {_el.projModal?_el.projModal.map((_slide,_id)=>(
                                                <div className="swiper-slide"
                                                     style="background-image:url(../static/images/0709.jpg_wh860.jpg)"></div>
                                            )):<></>}
                                        </div>

                                        <div className="swiper-pagination"></div>
                                    </div>
 */
/*
<Swiper
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                        effect='coverflow' settings={settings} className='.swiper-container'
                                    >
                                        {_el.projModal?_el.projModal.map((_slide,_id)=>(
                                            <SwiperSlide className="swiper-slide">
                                                <div style={{backgroundImage: '../static/images/0709.jpg_wh860.jpg'}}/>
                                            </SwiperSlide>
                                        )):<></>}

                                    </Swiper>
 */
/*
<Swiper {...settings}>

                                            {_el.projModal?_el.projModal.map((_slide,_id)=>(
                                                <div className="swiper-slide"
                                                     style={{backgroundImage:"../static/images/0709.jpg_wh860.jpg"}}></div>
                                            )):<></>}

                                    </Swiper>
 */