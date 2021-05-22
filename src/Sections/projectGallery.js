import AroundWeb from '../staticAssets/videos/aroundWeb/AroundWeb.mp4'
import jupiterOverview1 from '../staticAssets/videos/eventManager/ZHENGPIAN.webm'
import jupiterOverview2 from '../staticAssets/videos/eventManager/ZHENGPIAN2.webm'
import jupiterRegisterV from '../staticAssets/videos/eventManager/register.webm'
import jupiterTicket from '../staticAssets/videos/eventManager/REALREAL WEB.webm'
import jupiterNearby from '../staticAssets/images/eventManager/jupiter nearby.PNG'
import jupiterFav from '../staticAssets/images/eventManager/jupiter favorite.PNG'
import jupiterRecom from '../staticAssets/images/eventManager/jupiter recommendations.PNG'
import jupiterRegisterP from '../staticAssets/images/eventManager/jupiter register.PNG'
import jupiterLogin from '../staticAssets/images/eventManager/Jupiter login.PNG'
import twitterOverview1 from '../staticAssets/videos/twitterClone/all1.webm'
import twitterChatMsg1 from '../staticAssets/videos/twitterClone/chatmsg1.webm'
import twitterChatMsg2 from '../staticAssets/videos/twitterClone/chatmsg2.webm'
import twitterComment from '../staticAssets/videos/twitterClone/mainly-comment2_IHKfg5HL_yTYu.mp4'
import twitterNotification1 from '../staticAssets/videos/twitterClone/notification1.webm'
import twitterNotification2 from '../staticAssets/videos/twitterClone/notification 2.webm'
import twitterPin from '../staticAssets/videos/twitterClone/real pin unpin.webm'
import twitterInbox from '../staticAssets/videos/twitterClone/set up for chatmsg.webm'
import twitterOverview2 from '../staticAssets/videos/twitterClone/xiaoliang post retweet like comment.webm'
import noteOverview1 from '../staticAssets/videos/everNotes/evernoteOverview1.webm'
import noteOverview2 from '../staticAssets/videos/everNotes/evernoteOverview2.webm'
import noteOverview3 from '../staticAssets/videos/everNotes/evernoteOverview3.webm'
import tourOverview from '../staticAssets/videos/tours/tour-overview.webm'
import tourPwd from '../staticAssets/videos/tours/changePwd.webm'
import tourNameEmail from '../staticAssets/videos/tours/name&email.webm'
import tourProfPic from '../staticAssets/videos/tours/profilepic.webm'
import tourBooking from '../staticAssets/videos/tours/booking.webm'
//import memes from '../staticAssets/videos/memes/memes.webm'
import msg121 from '../staticAssets/videos/121chatroom/receiving&sendingMsg.webm'
import msg121b from '../staticAssets/videos/121chatroom/receiving&sendingMsg2.webm'
import register121 from '../staticAssets/videos/121chatroom/register.webm'
import firstMsg121 from '../staticAssets/videos/121chatroom/send first msg.webm'
//import account from '../staticAssets/videos/account/account.webm'
//import todos from '../staticAssets/videos/todos/todos.webm'


export const gallery=[
    {
        projImgSrc:'https://www.youtube.com/embed/-Jo-zO5Rjbk',//AroundWeb,
        imgType: 'youtube', //"video",
        //ytlink:true //using iframe otherwise (undefined or false) using video tag; or adding 'youtube' to imgType
        projTitle:"Around Web",
        projSummary:"• Built a geo-based social network web application with React JS. \n" +
            "• Implemented basic token based registration / login / logout flow with React Router v4 and server-side user authentication with JWT. \n" +
            "• Implemented features such as \"Create Post\", \"Nearby Posts As Gallery\" and \"Nearby Posts In Map\" with Ant Design, GeoLocation API and Google Map API.\n",
        projModal:[{
            imgSrc: AroundWeb,//'https://www.youtube.com/embed/-Jo-zO5Rjbk',//AroundWeb,
            imgTxt: "Trolltunga, Norway",
            innerImgType: "video",//'youtube',
            //////ytlink:'https://www.youtube.com/embed/-Jo-zO5Rjbk',
            //ytlink:true //using iframe otherwise (undefined or false) using video tag; or adding 'youtube' to innerImgType
        }],
        modalShown:false,
        github:'https://github.com/iamjustnobody/around-web',
        readMore:false
    },
    {
        projTitle: 'Event Manager',
        projImgSrc:jupiterNearby,
        imgType:"picture",
        projSummary: "- Created Java servlets with RESTful APIs to handle HTTP requests and responses\n" +
            "- Built relational database (MySQL) to capture real business data from Ticketmaster API\n" +
            "- Developed an interactive web page for users to search events and purchase tickets (HTML, CSS and JavaScript, AJAX)\n" +
            "- Researched multiple recommendation algorithms (e.g., content-based recommendation) and implemented personalized business recommendation based on search history and favorite records\n",
        projModal:[
            {
                imgSrc:jupiterOverview1,
                imgTxt:"Mountains and fjords",
                innerImgType:"video"
            },
            {
                imgSrc:jupiterOverview2,
                imgTxt:"Mountains and fjords",
                innerImgType:"video"
            },
            {
                imgSrc:jupiterRegisterV,
                imgTxt:"Mountains and fjords",
                innerImgType:"video"
            },
            {
                imgSrc:jupiterTicket,
                imgTxt:"Mountains and fjords",
                innerImgType:"video"
            },
            {
                imgSrc:jupiterNearby,
                imgTxt:"Mountains and fjords",
                innerImgType:"picture"
            },
            {
                imgSrc:jupiterFav,
                imgTxt:"Mountains and fjords",
                innerImgType:"picture"
            },
            {
                imgSrc:jupiterRecom,
                imgTxt:"Mountains and fjords",
                innerImgType:"picture"
            },
            {
                imgSrc:jupiterRegisterP,
                imgTxt:"Mountains and fjords",
                innerImgType:"picture"
            },
            {
                imgSrc:jupiterLogin,
                imgTxt:"Mountains and fjords",
                innerImgType:"picture"
            }
        ],
        modalShown:false,
        github: "https://github.com/iamjustnobody/Event_Manager",
        readMore:false
    },
    {
        projTitle:"mini-Twitter",
        projImgSrc:twitterChatMsg2,
        imgType: "video",
        projSummary:"- Created a social network site just like Twitter complete with tweets, likes / comments / retweets /pin, " +
            "profile pages with profile picture & cover photo uploads, follwing & followers support, "+
            "instant messaging and notifications in real time, and group chat support etc; \n"+
            "- These features were implemented by RESTful APIs built in Node.js, Mongoose models created for CRUD operations with MongoDB databse,"+
            " user interactive web pages utilizing Pug templates & Javascript/Jquery, and realtime application framework socket.io (JS Library)",
        projModal:[
            {
                imgSrc:twitterOverview1,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:twitterOverview2,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:twitterComment,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:twitterPin,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:twitterInbox,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:"https://www.youtube.com/embed/TOvar4Vwzzg",//twitterChatMsg1,
                imgTxt:"Trolltunga, Norway",
                innerImgType: 'youtube',//"video",
                //ytlink:true //using iframe otherwise (undefined or false) using video tag; or adding 'youtube' to innerImgType
            },
            {
                imgSrc:'https://www.youtube.com/embed/F1vJGp95HuU',//twitterChatMsg2,
                imgTxt:"Trolltunga, Norway",
                innerImgType: 'youtube', //"video",
                //ytlink:true //using iframe otherwise (undefined or false) using video tag; or adding 'youtube' to innerImgType
            },
            {
                imgSrc:twitterNotification1,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:twitterNotification2,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
        ],
        modalShown:false,
        github: "https://github.com/iamjustnobody/mini-twitter",
        readMore:false
    },
    {
        projTitle:"Evernote",
        projImgSrc:noteOverview1,
        imgType: "video",
        projSummary:"Created a clone of the popular note-taking application Evernote which allows us to create notes with a full text editor, and update live to a database.",
        projModal:[
            {
            imgSrc:noteOverview1,
            imgTxt:"Trolltunga, Norway",
            innerImgType: "video"
            },
            {
                imgSrc:noteOverview2,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:noteOverview3,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: 'https://github.com/iamjustnobody/my-ever-note',
        readMore:false
    },
    {
        projTitle:"Intouresting",
        projImgSrc:tourOverview,
        imgType: "video",
        projSummary:"- Generated back-end stack using Node, Express, MongoDB & Mongoose\n"+
            "- Built scalable, feature-rich RESTful APIs (includes filters, sorts, pagination etc)\n"+
            "- Worked with data in NoSQL databases (including geospatial data) and trend the data\n"+
            "- Extra features embed in the web app, e.g. authentication & authorisation, Node.js security (encryption, sanitization, rate limiting etc), sending emails, uploading files, payments with Stripe etc",
        projModal:[
            {
                imgSrc:tourOverview,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:tourNameEmail,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:tourProfPic,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:tourPwd,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:tourBooking,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: "https://github.com/iamjustnobody/Intouresting",
        readMore:false
    },/*
    {
        projTitle:"Memes Creator",
        projImgSrc:memes,
        imgType: "video",
        projSummary:"Built a meme creator / generator app in React, utilizing external imageflip API",
        projModal:[
            {
                imgSrc:memes,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: 'https://github.com/iamjustnobody/memes-creator'
    },*/
    {
        projTitle:"1-2-1 Chat Room",
        projImgSrc:msg121,
        imgType: "video",
        projSummary:"Built a fully functional instant messaging application using React and Firebase",
        projModal:[
            {
                imgSrc:register121,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:firstMsg121,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:msg121,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            },
            {
                imgSrc:msg121b,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: "https://github.com/iamjustnobody/121ChatRoom",
        readMore:false
    },/*
    {
        projTitle:"My Account",
        projImgSrc:account,
        imgType: "video",
        projSummary:"Built a simple accounting app that will allow you to view your bills and see how much you are spending daily, monthly, and yearly along with how much you can save by eliminating bills",
        projModal:[
            {
                imgSrc:account,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: 'https://github.com/iamjustnobody/simple-accounting',
        readMore:false
    },
    {
        projTitle:"Todo List",
        projImgSrc:todos,
        imgType: "video",
        projSummary:"Coded a simple Todo App using React",
        projModal:[
            {
                imgSrc:todos,
                imgTxt:"Trolltunga, Norway",
                innerImgType: "video"
            }],
        modalShown:false,
        github: 'https://github.com/iamjustnobody/react-todo',
        readMore:false
    },*/
]