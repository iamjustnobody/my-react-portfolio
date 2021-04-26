import React, {useEffect, useState} from 'react';
import "./Portfolio.css";

export const Portfolio = () =>{
    const gallery=[{
        projImgId:'first',
        projTitle:"ever-note",
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
    useEffect(()=>{setProjGallery(gallery);},[]) //console.log(projGallery[0].modalShown)

    const [innerModalId,setInnerModalId]=useState(0)

    const handleModal=async (index)=>{ //console.log('before modal open',projGallery);
    await setInnerModalId(0)
        await setProjGallery(projGallery.map(((el,id)=>{
            //if(index==id){el.modalShown=!el.modalShown}
            //return el
            if(index==id){return {...el,modalShown:!el.modalShown}}//console.log(el.modalShown);
            return el
        })))
        setGlobalModalIndex(index)
    }



    const [globalModalIndex,setGlobalModalIndex]=useState(0)
    //const closeModal=()=>setProjGallery(projGallery.map(((el,id)=> ({...el,modalShown:false}))))
    //above + jumptoinnerslide =below
    /*const closeModal=(event)=>{ console.log('before modal close',projGallery)
        const modal = document.getElementById('myModal');
        const modalContent = document.getElementById('modalContent');
        if(event.target==modal&&event.target!=modalContent) {
            setProjGallery(projGallery.map((el, index) => {
                if(index==globalModalIndex){
                    return {
                        ...el,
                        modalShown:false,
                        //projModal:innerModalId==0?el.projModal
                        //        :el.projModal.map((item, id) => id == innerModalId ? ({...item,innerModalShown:false}) :(id==0?({...item,innerModalShown:true}):item))
                        projModal:el.projModal.map((item,id)=> id==0?({...item,innerModalShown:true}):({...item,innerModalShown:false}))
                    }
                }
                return el
            }))
            handleModal(globalModalIndex)
        }
        setInnerModalId(0)
    }
    useEffect(() => {
        document.addEventListener('click',closeModal)
        return () => {
            document.removeEventListener("click",closeModal);
        }
    }, []) */

   // const [innerModalId,setInnerModalId]=useState(0)
    const handleSlides =async (curIndex,curId,prevNext)=>{
        let toId=curId
        await setProjGallery(projGallery.map((el,index)=>{
            if(index==curIndex) {
                return {
                    ...el,
                    projModal:
                        el.projModal.map((item, id) => {
                            if (id == curId) return {...item, innerModalShown: !item.innerModalShown}
                            toId=(curId + prevNext < 0 ? el.projModal.length - 1 : (curId + prevNext == el.projModal.length ? 0 : (curId + prevNext)))
                            if (id == toId) {
                                return {...el.projModal[id], innerModalShown: !el.projModal[id].innerModalShown}
                            }
                        })
                }
            }
            return el
        }))
        await setInnerModalId(toId)
    }

    const jumpToInnerSlide=async (curIndex,fromId,toId)=>{
        if(fromId==toId) return
        await setProjGallery(projGallery.map((el,index)=>{
            if(index==curIndex) {
                return {
                    ...el,
                    projModal:
                        el.projModal.map((item, id) => {
                            if (id == fromId || id==toId) return {...item, innerModalShown: !item.innerModalShown}
                        })
                }
            }
            return el
        }))
        await setInnerModalId(toId)
    }

    let dots = [];
    const outputDots=(curIndex,fromId)=>{ //console.log(projGallery[curIndex].projModal.length)
        for (let i = 0; i < projGallery[curIndex].projModal.length; i++) {
            dots.push(<span className={projGallery[curIndex].projModal[i].innerModalShown?"dot active":"dot"}
                            onClick={() => jumpToInnerSlide(curIndex,fromId, i)}></span>);
        }
        //console.log('dots',dots)
        return dots;
    }//className={projGallery[curIndex].projModal[i].innerModalShown?"dot active":"dot"}

    return (
        <div id="Portfolio" className="portfolio-container">
            <h1 className="heading">Project</h1>
            <div className='projects-container'>
                {projGallery.map((_el,_index)=>{
                    return    <>
                                <div className='project' data-aos="fade-up" data-aos-easing="linear"
                                     data-aos-duration="1500">
                                    <div className='project-image' id={projGallery[_index].projImgId} onClick={()=>{handleModal(_index)}}></div>
                                    <div className='project-title'><h2>{_el.projTitle}</h2></div>
                                    <div className='project-githubCodes'>
                                        <a href="">
                                            <i className="fab fa-github" title="github repo" id="github">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                                {_el.modalShown?
                                    <div className='modal' id='myModal'>
                                        <span className="close" onClick={()=>{handleModal(_index)}}>&times;</span>
                                        <div className='modal-content' id='modalContent'>

                                            {_el.projModal?_el.projModal.map((_item,_id)=>{
                                                return <>{(_el.projModal[_id].innerModalShown?
                                                    <>
                                                        <div className="myInnerSlides fade">
                                                            <div className="numbertext">{_id+1} / {_el.projModal.length}</div>
                                                            <img src={_item.imgSrc} alt={_item.imgTxt} />
                                                            <div className='dots' style={{textAlign:"center"}}>
                                                                {outputDots(_index,_id)}
                                                            </div>

                                                        </div>
                                                        <div className='caption'>{_el.projModal[_id].imgTxt}</div>


                                                        <a className="prev" onClick={()=>{handleSlides(_index,_id,-1)}}>&#10094;</a>
                                                        <a className="next" onClick={()=>{handleSlides(_index,_id,1);console.log(_el)}}>&#10095;</a>


                                                        <div className='bottom-overview'>
                                                            {_el.projModal.map((_innerModal,_iM)=>

                                                                <img className={_innerModal.innerModalShown?"demo active":"demo"}
                                                                     src={_el.projModal[_iM].imgSrc} alt={_innerModal.imgTxt}
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
                })}
            </div>
            
        </div>
    );
}
//<a><div>
//<a><img>
//<div onClick> or <img onClick>
////_item.innerModalShown? <img src={_item.imgSrc} alt={_item.imgTxt} /> <p className={text}>{_item.imgTxt}</p>

//return <>{(_el.projModal[_id].innerModalShown?<><div></div></>:<></>)}</> or return (_el.projModal[_id].innerModalShown?<><div></div></>:<></>)
//return (x) ; () can also be removed ; So {return (x)} or {return x} ; But if no {} & return, must/better to have ()
// So =>{return (x)} becomes =>{return x} becomes =>(x) (sometimes => x)