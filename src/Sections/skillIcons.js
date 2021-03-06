import jupiterGlosV from '../staticAssets/videos/eventManager/ZHENGPIAN.webm'
import twitterNotification1 from '../staticAssets/videos/twitterClone/notification1.webm'
import tourOverview from '../staticAssets/videos/tours/tour-overview.webm'
import aroundWeb from '../staticAssets/videos/aroundWeb/AroundWeb.mp4'
import memes from "../staticAssets/videos/memes/memes.webm";
import account from '../staticAssets/videos/account/account.webm'
import todos from '../staticAssets/videos/todos/todos.webm'
import jupiterLogin from "../staticAssets/images/eventManager/Jupiter login.PNG";
import portfolioReactWeb from '../staticAssets/images/portfolioReactWeb.PNG'

export const icons=[
    {
        classname:"fab html fa-html5",
        iconname:'HTML5',
        iconModal:[
            {
                imgSrc:"http://static.runoob.com/images/demo/demo3.jpg",
                imgTxt:"Mountains and fjords",
                innerModalShown:true
            },
            {
                imgSrc:"http://static.runoob.com/images/demo/demo4.jpg",
                imgTxt:"Northern Lights",
                innerModalShown:false
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"https://myportfolio-react.firebaseapp.com",
                subHtml: '<p>My Portfolio Website using React</p>',
                thumb:portfolioReactWeb,
                iframe: true
            },
            {
                src:jupiterLogin,
                thumb:jupiterLogin,
                subHtml: '<p>description</p>'
            }
        ]
    },
    {
        classname:"fab css fa-css3",
        iconname:'CSS3',
        iconModal:[
            {
                imgSrc:"http://static.runoob.com/images/demo/demo3.jpg",
                imgTxt:"Mountains and fjords",
                innerModalShown:true
            },
            {
                imgSrc:"http://static.runoob.com/images/demo/demo4.jpg",
                imgTxt:"Northern Lights",
                innerModalShown:false
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"https://myportfolio-react.firebaseapp.com",
                subHtml: '<p>My Portfolio Website using React</p>',
                thumb:portfolioReactWeb,
                iframe: true
            },
            {
                src:jupiterLogin,
                thumb:jupiterLogin,
                subHtml: '<p>description</p>'
            }
        ]
    },
    {
        classname:"fab javascript fa-js",
        iconname:'Javascript',
        iconModal:[
            {
                imgSrc:"http://static.runoob.com/images/demo/demo3.jpg",
                imgTxt:"to be uploaded",
                innerModalShown:true
            },
            {
                imgSrc:"http://static.runoob.com/images/demo/demo4.jpg",
                imgTxt:"to be uploaded",
                innerModalShown:false
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"http://static.runoob.com/images/demo/demo3.jpg",
                thumb:"http://static.runoob.com/images/demo/demo3.jpg",
                subHtml: '<p>to be uploaded</p>'
            },
            {
                src:"http://static.runoob.com/images/demo/demo4.jpg",
                thumb:"http://static.runoob.com/images/demo/demo4.jpg",
                subHtml: '<p>to be uploaded</p>'
            }
        ]
    },
    {
        classname:"fab react fa-react",
        iconname:'React',
        iconModal:[
            {
                imgSrc:aroundWeb,
                imgTxt:"Around Web",
                imgType:'video',
                innerModalShown:true
            },
            {
                imgSrc:"http://static.runoob.com/images/demo/demo2.jpg",
                imgTxt:"React NBA - in progress - to be added",
                imgType:'picture',
                innerModalShown:false
            },
            {
                imgSrc:memes,
                imgTxt:"Memes Creator",
                imgType: "video",
                innerModalShown:false
            },
            {
                imgSrc:account,
                imgTxt:"My Account",
                imgType: "video",
                innerModalShown:false
            },
            {
                imgSrc:todos,
                imgTxt:"Todo List",
                imgType: "video",
                innerModalShown:false
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"https://youtu.be/-Jo-zO5Rjbk",
                subHtml: '<p>Around Web</p>'
            },
            {
                src:"http://static.runoob.com/images/demo/demo2.jpg",
                thumb: "http://static.runoob.com/images/demo/demo2.jpg",
                subHtml: '<p>reactNBA to be uploaded</p>',
            },
            {
                src:"https://youtu.be/uWTi6YQQEmA",
                subHtml: '<p>Memes Creator</p>'
            },
            {
                src:"https://youtu.be/rn4AuUej62M",
                subHtml: '<p>Simple Accounting</p>'
            },
            {
                src:"https://youtu.be/YfAbm0CODuE ",
                subHtml: '<p>React Todos</p>'
            },
        ]
    },
    {
        classname:"fab java fa-java",
        iconname:'Java',
        iconModal: [
            {
                imgSrc:jupiterGlosV,
                imgTxt:"Event Manager - Recommendations",
                imgType:'video',
                innerModalShown:true
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"https://youtu.be/l4EGU6x9XkA",
                subHtml: '<p>Recommendation system</p>'
            }
        ]
    },
    {
        classname:"fab node fa-node",
        iconname:'Node',
        iconModal:[
            {
                imgSrc:twitterNotification1,
                imgTxt:"Real time twitter-clone ",
                imgType:'video',
                innerModalShown:true
            },
            {
                imgSrc: tourOverview,
                imgTxt:"Intouresting",
                imgType:'video',
                innerModalShown:false
            }
        ],
        modalShown:false,
        dynamicEl: [
            {
                src:"https://youtu.be/RCDrzlyc-mU",
                subHtml: '<p>Real-time Twitter-clone</p>'
            },
            {
                src:"https://youtu.be/ErteGoDAdkI",
                subHtml: '<p>In-tour-esting</p>'
            }
        ]
    }
]