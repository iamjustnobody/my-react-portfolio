import React, {useEffect, useState} from 'react';
import "./SkillCards.css";
import videoUrl1 from '../staticAssets/videos/aroundWeb/AroundWeb.mp4'
import {icons} from './skillIcons'

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


    const [iconGallery,setIconGallery]=useState(icons)
    useEffect(()=>{setIconGallery(icons);},[])


    const handleModal=async (index)=>{

        await setIconGallery(iconGallery.map(((el,id)=>{
            //if(index==id){el.modalShown=!el.modalShown}
            //return el
            if(index==id){return {...el,modalShown:!el.modalShown}}
            return el
        })))

        //await props.setGlobalBlur(!props.globalBlur) //making bg blur also making higher zindex modal blur
    }


    const handleSlides =async (curIndex,curId,prevNext)=>{
        let toId=curId
        await setIconGallery(iconGallery.map((el,index)=>{
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
            dots.push(<span className={iconGallery[curIndex].iconModal[i].innerModalShown?"dot active":"dot"}
                            onClick={() => jumpToInnerSlide(curIndex,fromId, i)}></span>);
        }
        //console.log('dots',dots)
        return dots;
    }//className={iconGallery[curIndex].iconModal[i].innerModalShown?"dot active":"dot"}
    
    
    
    return (
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
                                <div className='modal-content' id='modalContent'>
    
                                    {_icon.iconModal?_icon.iconModal.map((_item,_id)=>{
                                            return <>{(_icon.iconModal[_id].innerModalShown?
                                                <>
                                                    <div className="myInnerSlides fade">
                                                        <div className="numbertext">{_id+1} / {_icon.iconModal.length}</div>
                                                        {_item.imgType == 'video' ?
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
                                                        {_icon.iconModal.map((_innerModal,_iM)=>

                                                            _innerModal.imgType=='video'?
                                                                    <video className={_innerModal.innerModalShown?"demo active":"demo"}
                                                                           src={_innerModal.imgSrc} alt={_innerModal.imgTxt}
                                                                           onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>
                                                                    :
                                                                    <img className={_innerModal.innerModalShown?"demo active":"demo"} src={_icon.iconModal[_iM].imgSrc} alt={_innerModal.imgTxt}
                                                                         onClick={()=>{jumpToInnerSlide(_index,_id,_iM)}}/>

                                                        )}
                                                    </div>
                                                </>
                                                :<></>)}</>
                                        })
                                        :<></>}
    
    
                                </div>
    
                            </div>
                            :<></>}
                        
                        </>
                )})}

            </div>
        </div>
    );
})
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