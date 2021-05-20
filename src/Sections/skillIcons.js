import jupiterGlosV from '../staticAssets/videos/eventManager/ZHENGPIAN.webm'
import twitterNotification1 from '../staticAssets/videos/twitterClone/notification1.webm'
import tourOverview from '../staticAssets/videos/tours/tour-overview.webm'
import aroundWeb from '../staticAssets/videos/aroundWeb/AroundWeb.mp4'
import memes from "../staticAssets/videos/memes/memes.webm";
import account from '../staticAssets/videos/account/account.webm'
import todos from '../staticAssets/videos/todos/todos.webm'

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
        modalShown:false
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
        modalShown:false
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
        modalShown:false
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
            },/*
            {
                imgSrc:"http://static.runoob.com/images/demo/demo2.jpg",
                imgTxt:"React NBA - in progress - to be added",
                imgType:'picture',
                innerModalShown:false
            },*/
            {
                imgTxt:"Memes Creator",
                imgSrc:memes,
                imgType: "video",
                innerModalShown:false,
                github: 'https://github.com/iamjustnobody/memes-creator'
            },
            {
                imgTxt:"My Account",
                imgSrc:account,
                imgType: "video",
                innerModalShown:false,
                github: 'https://github.com/iamjustnobody/simple-accounting',
            },
            {
                imgTxt:"Todo List",
                imgSrc:todos,
                imgType: "video",
                innerModalShown:false,
                github: 'https://github.com/iamjustnobody/react-todo',
            },
        ],
        modalShown:false
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
        modalShown:false
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
        modalShown:false
    }
]