import React, {useEffect, useState} from 'react';

//import "./ProjectCards.css"; //moved below swiper CSS
import imgsrcurl1 from '../staticAssets/images/unnamed.png' // relative path to image
import imgsrcurl2 from '../staticAssets/images/0709.jpg_wh860.jpg'
/*
import videoUrl1 from '../static/videos/AroundWeb.mp4'
//import yturl from 'youtu.be/rn4AuUej62M'
import twitterOverview from '../static/videos/all1.webm'*/

import {gallery} from './projectGallery'



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
  //move to index css b4 all css - ok but no need - just move b4 projectcards css
import "./ProjectCards.css";


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]);

export const ProjectCards = React.forwardRef((props,ref) =>{
    /*const gallery=[{
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
    }] */

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
        loop: false,
        /*autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },*/
    }


    const [swiper,setSwiper]=useState()
    useEffect(()=>{
        setSwiper(new Swiper('.swiper-container',settings))
    },[globalSwiperShownIndicator,setGlobalSwiperShownIndicator])


    const handleCardHeight=async (index)=>{
        await setProjGallery(projGallery.map((el,id)=>
        //{return (index==id?({...el,modalShown:!el.modalShown}):el)}
                (index==id?({...el,readMore:!el.readMore}):el)
        ))
        //just like handleModal
    }

//data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" was in project-card
// now introduce readMore everytime changeing readMore field re-render hovered proj-card (projCard disappear fade/ease aos) so move aos to projects-container
    return (
        <div id="ProjectCards" className="portfolio-container" ref={ref}>
            <h1 className="heading">Project</h1>
            <div className='projects-container' data-aos="fade-up" data-aos-easing="linear"
                 data-aos-duration="1500">
                {projGallery.map((_el,_index)=>{
                    return <>
                                <div className={_el.readMore?'project-card active':'project-card'}
                                     >
                                    <div className='imgBox'>
                                        {projGallery[_index].imgType=="video"?
                                        <video className='imgBx-image' controls>
                                            <source src={projGallery[_index].projImgSrc} type="video/mp4"></source>
                                        </video>
                                        :<img className='imgBx-image' src={projGallery[_index].projImgSrc}/>}
                                    </div>
                                    <div className='project-content'>
                                        <div className='headline-ctrl'>
                                        <div className='project-headline'>
                                            <div className='project-name'><p data-name={_el.projTitle}>{_el.projTitle}</p></div>
                                            <div className='project-githubLink'>
                                                <a href={_el.github} target="_blank">
                                                    <i className="fab fa-github" title="github repo" id="github"></i>
                                                </a>
                                            </div>
                                            <div className='project-slides' onClick={()=>{handleModal(_index)}}>
                                                <i className="fas fa-external-link-alt" title="demo & preview"></i>
                                            </div>
                                        </div>
                                            <div className='read-more' onClick={()=>{handleCardHeight(_index)}}><div>{_el.readMore?'Read Less':"Read More"}</div></div>
                                        </div>
                                        <div className='project-summary'>{_el.projSummary.split("\n").map((_des,_key) => (<div key={_key}>{_des}</div>))}</div>

                                    </div>
                                    <div className={_el.readMore?'':'mask'}></div>
                                    <div className='more' onClick={()=>{handleCardHeight(_index)}}>{_el.readMore?'read less':'read more'}</div>
                                </div>
                                {_el.modalShown?
                                <div className='swiperModal' id='mySwiperModal'>
                                    <span className="swiperClose" onClick={()=>{handleModal(_index)}}>&times;</span>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {_el.projModal?_el.projModal.map((_slide,_id)=>(
                                                <div className="swiper-slide" >
                                                    {_slide.innerImgType=="video"?
                                                        <video src={_slide.imgSrc} controls></video>
                                                        :<img src={_slide.imgSrc}/>
                                                    }
                                                </div>
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
})
//{_el.projTitle.replace(/[^\]\\n/g, '\n')} //{_el.projTitle.replace('<br/>', '\n')} //{_el.projTitle.split("\n").map((i,key) => {return <div key={key}>{i}</div>;})}
//<video src="https://youtu.be/rn4AuUej62M" type='video/youtube' controls></video>
//or https://www.youtube.com/watch?v=rn4AuUej62M or controls="true" or controls="controls" or just contorls
//or <video controls onClick={()=>{handleModal(_index)}}><source src="https://youtu.be/rn4AuUej62M" type='video/youtube' /></video>
//<iframe src="https://www.youtube.com/watch?v=rn4AuUej62M"></iframe> or https://youtu.be/rn4AuUej62M

//<div className='imgBox'><img className='imgBx-image' src={projGallery[_index].projImgSrc} onClick={()=>{handleModal(_index)}}/></div>
//<div className="swiper-slide" ><img src={_slide.imgSrc}/></div>
//<div className="swiper-slide" ><video src={_slide.imgSrc} controls/></div>

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