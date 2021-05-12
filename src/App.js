import logo from './logo.svg';
import './App.css';
import {TopNav} from "./TopNav";
import {Main} from "./Main";
import React, {useState, useEffect, useRef} from 'react';
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
        const handleYScrolling=(event)=>{//console.log(window.pageYOffset,window.scrollY);
            setY(window.scrollY)
        }
        document.addEventListener('scroll',handleYScrolling)
        return () => {
            document.removeEventListener("scroll",handleYScrolling);
        }
    }, [setY,y])
    useEffect(()=>{AOS.init({
        duration : 2000
    })},[]);





    const getDimensions = (ele) => { console.log('ele',ele)
        const { height } = ele.getBoundingClientRect(); console.log('height',height)
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;

        return {
            height,
            offsetTop,
            offsetBottom,
        };
    };

    const [visibleSection, setVisibleSection] = useState();

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const aboutmeRef = useRef(null);
    const contactmeRef = useRef(null);
    const projectcardsRef = useRef(null);
    const skillcardsRef = useRef(null);

    //headerRef.current=document.getElementById('topNav');
    //console.log('dom ',React.findDOMNode(headerRef))
    const ref={
        ref1:homeRef,
        ref2: aboutmeRef,
        ref3: skillcardsRef,
        ref4: projectcardsRef,
        ref5: contactmeRef,
    }

    const sectionRefs = [
        { section: "home", ref: homeRef },
        { section: "aboutMe", ref: aboutmeRef },
        { section: "contactMe", ref: contactmeRef },
        { section: "projectCards", ref: projectcardsRef },
        { section: "skillCards", ref: skillcardsRef },
    ];
    useEffect(() => {
        //const handleScroll=event=>{let scrollTop = event.srcElement.body.scrollTop}
        const handleScroll = () => {
              const { height: headerHeight } = getDimensions(headerRef.current);
              const scrollPosition = window.scrollY + headerHeight;

              const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current; //console.log('ele',ele)
                if (ele) {
                  const { offsetBottom, offsetTop } = getDimensions(ele);
                  return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
              });

              if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
              } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
              }
         };

        handleScroll(); //when mount - deps as []
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener("scroll",handleScroll);
        }
    }, [visibleSection]) //deps not just []

    //const handleScroll=event=>{} //better to be inside useeffect so can be cleaned up

useEffect(()=>{console.log(visibleSection)},[visibleSection])



    const [globalBlur,setGlobalBlur]=useState(false) //active/true when any modal shows;
    // but making everything blur (entire page /app-container including popup higher zindex modal)
    //unless any modal is siblings of app-container
  return (
      <div className={globalBlur?"app-container blurbg":"app-container"} id='app-blur'>
          <div className={y===0?"AppTransparent-bg":"App-bg"}>
              <div className={y===0?"AppTransparent":"App"}>
                  {y==0?<img src={logo} className="App-logo" alt="logo" />:<></>}
                  <TopNav y={y} ref={headerRef} visibleSection={visibleSection} id='topNav'/>
              </div>
          </div>

          <Main y={y} setGlobalBlur={setGlobalBlur} globalBlur={globalBlur}
                ref={ref}/>
      </div>
  );
}
//<TopNav y={y} headerState={headerRef} visibleSection={visibleSection} id='topNav'/>
/*
<Main y={y} setGlobalBlur={setGlobalBlur} globalBlur={globalBlur}
                homeState={homeRef} aboutmeState={aboutmeRef} contactmeState={contactmeRef}
                projectcardsState={projectcardsRef} skillcardsState={skillcardsRef}/>
 */
export default App;
