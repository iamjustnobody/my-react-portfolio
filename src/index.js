import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Apps} from './Apps';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

/*
import 'swiper/swiper-bundle.min.css' //comes first
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'
*/ //intended to move here b4 all css- not working - move back to projectcardsJs but placed just b4 import projectCarsCSS

ReactDOM.render(
    <BrowserRouter>
        <Apps />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<React.StrictMode>
    <App />
  </React.StrictMode>
 */
