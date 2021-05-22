import React, {useEffect, useState} from 'react';

import videoUrl1 from '../staticAssets/videos/aroundWeb/AroundWeb.mp4'
import {icons} from './skillIcons'


import lightGallery from 'lightgallery';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import "./SkillCards.css";

//for testing - as belows
import jupiterLogin from '../staticAssets/images/eventManager/Jupiter login.PNG'
import twitterOverview1 from '../staticAssets/videos/twitterClone/all1.webm'
import twitterComment from '../staticAssets/videos/twitterClone/mainly-comment2_IHKfg5HL_yTYu.mp4'



export const SkillCards = React.forwardRef((props,ref) =>{
    /*const icons=[{
        classname:"fab html fa-html5",
        iconname:'HTML5',
        iconModal:[{
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
        classname:"fab css fa-css3",
        iconname:'CSS3',
        iconModal:[{
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
        classname:"fab javascript fa-js",
        iconname:'Javascript',
        iconModal:[{
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
        classname:"fab react fa-react",
        iconname:'React',
        iconModal:[{
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
        classname:"fab java fa-java",
        iconname:'Java',
        iconModal:[{
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
        classname:"fab node fa-node",
        iconname:'Node',
        iconModal:[{
            imgSrc:"http://static.runoob.com/images/demo/demo1.jpg",
            imgTxt:"Nature and sunrise",
            innerModalShown:true
        },{
            imgSrc:"http://static.runoob.com/images/demo/demo2.jpg",
            imgTxt:"Trolltunga, Norway",
            innerModalShown:false
        }],
        modalShown:false
    }
]
*/


    const [iconGallery,setIconGallery]=useState([])//not useState(null)//useState(icons) ok
    useEffect(()=>{setIconGallery(icons);console.log('initiated ',iconGallery)},[])
    useEffect(()=>{console.log('icons statechange ',iconGallery)},[iconGallery])

    //const [dynamicGallery,setDynamicGallery]=useState()
    useEffect(()=>{
        /*document.getElementById("React").addEventListener('onClick',()=>{})
        $("#React").on('click',function() {
            $.fancybox.open([
                {
                    src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
                    opts : {
                        caption : 'First caption',
                        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
                    }
                },
                {
                    src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
                    opts : {
                        caption : 'Second caption',
                        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
                    }
                }
            ], {
                loop : true,
                thumbs : {
                    autoStart : true
                }
            });
        });*/
        /*
        const dynamicGallery = document.getElementById('React');
        const dynamicGalleryDemo = lightGallery(dynamicGallery, {
            dynamic: true,
            plugins: [
                lgZoom,
                lgThumbnail
            ],
            dynamicEl: [
                {
                    src:
                        'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
                  subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 1</p>
            </div>`,
                },
                {
                    src:
                        'https://www.youtube.com/watch?v=uGgRhKN5_Ao',
                    subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 2</p>
            </div>`,
                }
            ],
        });
        dynamicGallery.addEventListener('click', () => {
            dynamicGalleryDemo.openGallery(0);
        });*/
        /*
        setDynamicGallery(
            lightGallery(dynamicGallery, {
                dynamic: true,
                plugins: [
                    lgZoom,
                    lgThumbnail
                ],
                dynamicEl: [
                    {
                        src:
                            'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
                        subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 1</p>
            </div>`,
                    }]
            })
        )*/ //<div id={_icon.iconname} onClick={()=>dynamicGalleryDemo.openGallery(0)}>{_icon.iconname} projects</div>
    },[])

     const handleDynamicGallery=(id,index)=>{
        const dynamicGallery=document.getElementById(id);
        const dynamicGalleryDemo=lightGallery(dynamicGallery, {
            dynamic: true,
            plugins: [
                lgZoom,
                lgThumbnail,
                lgVideo
            ],
            /*dynamicEl: [
                {
                    src:jupiterLogin,
                    thumb:jupiterLogin,
                    subHtml: '<p>description</p>',
                },
                {
                    //html: '<video class="lg-video-object lg-html5" controls="controls" preload="none" autostart="false" autoplay=""><source src="../staticAssets/videos/twitterClone/all1.webm" type="video/webm">Your browser does not support HTML5 video</video>',
                    //src:twitterOverview1, //no
                    //not video:"https://www.youtube.com/watch?v=meBbDqAXago",//"https://www.youtube.com/watch?v=L9h0pLCtYDo",//"../staticAssets/videos/twitterClone/all1.webm",//twitterOverview1,
                    //src:"../staticAssets/videos/twitterClone/all1.webm",//<-ok; notok->//"https://youtu.be/rn4AuUej62M",//https://www.youtube.com/watch?v=L9h0pLCtYDo",//"https://www.youtube.com/watch?v=meBbDqAXago",
                    //src:"https://youtu.be/rn4AuUej62M",//ok
                    //video:`{"source": [{"src":${twitterOverview1}, "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`,//not ok
                    //video:`{"source": [{"src":twitterOverview1, "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`,//not ok
                   // video:`{"source": [{"src":"../staticAssets/videos/twitterClone/all1.webm", "type":"video/webm"}], "attributes": {"preload": false, "controls": true}}`,

                    //Not video:`{"source": [{"src":${twitterComment}, "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}`,
                    //video:'{"source": [{"src":"../staticAssets/videos/twitterClone/mainly-comment2_IHKfg5HL_yTYu.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
                    video:'{"source": [{"src":"/static/media/mainly-comment2_IHKfg5HL_yTYu.5303fb82", "type":"video/mp4"}], "attributes": {"preload": false, "controls": true}}',
                    subHtml: '<p>Description of the slide 1</p>',
                    //iframe:true,
                }],*/
            dynamicEl:iconGallery[index].dynamicEl,
            thumbnail:true,
            videojs:true
        });
        dynamicGalleryDemo.openGallery(0);
    }

    const handleModal=async (index)=>{ console.log(iconGallery[index].iconModal.length)

        await setIconGallery(iconGallery.map(((el,id)=>{
            //if(index==id){el.modalShown=!el.modalShown}
            //return el
            if(index==id){return {...el,modalShown:!el.modalShown}}
            return el
        })))

        //await props.setGlobalBlur(!props.globalBlur) //making bg blur also making higher zindex modal blur
    }


    const handleSlides =(curIndex,curId,prevNext)=>{ console.log(iconGallery[curIndex].iconModal.length)
        let toId=curId;console.log('test',iconGallery[curIndex],iconGallery[curIndex].iconModal[curId],iconGallery[curIndex].iconModal[curId+1])
        setIconGallery(iconGallery.map((el,index)=>{
            if(index==curIndex) {
                if(el.iconModal.length==1){return el;}
                return {
                    ...el,
                    iconModal:
                        el.iconModal.map((item, id) => {
                            if (id == curId) return {...item, innerModalShown: !item.innerModalShown}
                            toId=(curId + prevNext < 0 ? el.iconModal.length - 1 : (curId + prevNext == el.iconModal.length ? 0 : (curId + prevNext)))
                            if (id == toId) {
                                return {...el.iconModal[id], innerModalShown: !el.iconModal[id].innerModalShown}
                            }
                        })
                }
            }
            return el
        }))
        console.log(iconGallery[curIndex].iconModal.length,"hehe")
    }

    const jumpToInnerSlide=async (curIndex,fromId,toId)=>{
        if(fromId==toId) return
        await setIconGallery(iconGallery.map((el,index)=>{
            if(index==curIndex) {
                return {
                    ...el,
                    iconModal:
                        el.iconModal.map((item, id) => {
                            if (id == fromId || id==toId) return {...item, innerModalShown: !item.innerModalShown}
                        })
                }
            }
            return el
        }))
    }

    let dots = [];
    const outputDots=(curIndex,fromId)=>{
        for (let i = 0; i < iconGallery[curIndex].iconModal.length; i++) {
            dots.push(<span className={iconGallery[curIndex].iconModal[i]&&iconGallery[curIndex].iconModal[i].innerModalShown?"dot active":"dot"}
                            onClick={() => jumpToInnerSlide(curIndex,fromId, i)}></span>);
        }
        //console.log('dots',dots)
        return dots;
    }//className={iconGallery[curIndex].iconModal[i].innerModalShown?"dot active":"dot"}




    return (//_icon.iconModal[_id].innerModalShown? => (_item.innerModalShown?; inside icon.iconModal?_icon.iconModal.map
        <div id="SkillCards" className="skills-container" ref={ref}>
            <h1 className="heading">What I Can do &nbsp;&nbsp;?</h1>
            <div className="techs-container" >
                {iconGallery?iconGallery.map((_icon,_index)=>{
                    return (
                            <div className="tech-card" data-aos="zoom-in-up" key={_index}>
                                <div className='tech-box'>
                                    <div className='tech-content'>
                                        <i className={_icon.classname}></i>
                                        <div id={_icon.iconname} onClick={()=>handleDynamicGallery(_icon.iconname,_index)}>{_icon.iconname} projects</div>
                                    </div>
                                </div>
                            </div>

                    )}):null}

            </div>
        </div>
    );
})








    /*
    return (//_icon.iconModal[_id].innerModalShown? => (_item.innerModalShown?; inside icon.iconModal?_icon.iconModal.map
        <div id="SkillCards" className="skills-container" ref={ref}>
            <h1 className="heading">What I Can do &nbsp;&nbsp;?</h1>
            <div className="techs-container" >
                {iconGallery.map((_icon,_index)=>{
                return (
                    <>
                        <div className="tech-card" data-aos="zoom-in-up">
                            <div className='tech-box'>
                                <div className='tech-content'>
                                    <i className={_icon.classname}></i>
                                    <div onClick={()=>{handleModal(_index)}}>{_icon.iconname} projects</div>
                                </div>
                            </div>
                        </div>
    
                        {_icon.modalShown?
                            <div className='modal' id='myModal'>
                                <span className="close" onClick={()=>{handleModal(_index)}}>&times;</span>
                                <!--<div className='modal-content' id='modalContent'>
    
                                    {_icon.iconModal.length}
                                    {_icon.iconModal?_icon.iconModal.map((_item,_id)=>{
                                            return <>{(_item.innerModalShown?
                                                <>
                                                    <div className="myInnerSlides fade">
                                                        <div className="numbertext">{_id+1} / {_icon.iconModal.length}</div>
                                                        {_item.imgType&&_item.imgType == 'video' ?
                                                            <video src={_item.imgSrc} alt={_item.imgTxt} controls/>
                                                            : <img src={_item.imgSrc} alt={_item.imgTxt}/>
                                                        }
                                                        <div className='dots' style={{textAlign:"center"}}>
                                                            {outputDots(_index,_id)}
                                                        </div>

                                                    </div>
                                                    <div className='caption'>{_icon.iconModal[_id].imgTxt}</div>


                                                    <a className="prev" onClick={()=>{handleSlides(_index,_id,-1)}}>&#10094;</a>
                                                    <a className="next" onClick={()=>{handleSlides(_index,_id,1);}}>&#10095;</a>

                                                    <div className='bottom-overview'>
                                                        {_icon.iconModal?_icon.iconModal.map((_innerModal,_iM)=>

                                                            _innerModal&&_innerModal.imgType=='video'?
                                                                <video className={_innerModal&&_innerModal.innerModalShown?"demo active":"demo"}
                                                                       src={_innerModal.imgSrc} alt={_innerModal.imgTxt}
                                                                       onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
                                                                :
                                                                <img className={_innerModal&&_innerModal.innerModalShown?"demo active":"demo"}  src={_innerModal.imgSrc} alt={_innerModal.imgTxt}
                                                                     onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>

                                                        ):<></>}
                                                    </div>


                                                </>
                                                :<></>)}</>
                                        })
                                        :<></>}



                                </div> -->
    
                            </div>
                            :<></>}
                        
                        </>
                )})}

            </div>
        </div>
    );
})*/
//src={_icon.iconModal[_iM].imgSrc} or  src={_innerModal.imgSrc}

//<img src={_item.imgSrc} alt={_item.imgTxt} />
//<img className={_innerModal.innerModalShown?"demo active":"demo"} src={_icon.iconModal[_iM].imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
/*
{_icon.iconModal.map((_innerModal,_iM)=>(
<video className={_innerModal.innerModalShown?"demo active":"demo"} src={_innerModal.imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
))}
{_icon.iconModal.map((_innerModal,_iM)=>{return (
<video className={_innerModal.innerModalShown?"demo active":"demo"} src={_innerModal.imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
)})}
{_icon.iconModal.map((_innerModal,_iM)=>{return <>
<video className={_innerModal.innerModalShown?"demo active":"demo"} src={_innerModal.imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
</>})} or <></>-><div></div>
 */

/*
<div className='bottom-overview'>
    {_icon.iconModal.map((_innerModal,_iM)=>
        {
           if(_innerModal.imgType=='video'){
              return <video className={_innerModal.innerModalShown?"demo active":"demo"} src={_innerModal.imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
           }
           return <img className={_innerModal.innerModalShown?"demo active":"demo"} src={_icon.iconModal[_iM].imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
         })
      }
</div>
 */
/*
{_icon.iconModal.map((_innerModal,_iM)=>
 {
    return _innerModal.imgType=='video'?
          <video className={_innerModal.innerModalShown?"demo active":"demo"} src={_innerModal.imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
          :<img className={_innerModal.innerModalShown?"demo active":"demo"} src={_icon.iconModal[_iM].imgSrc} alt={_innerModal.imgTxt} onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
 })
 }
 */