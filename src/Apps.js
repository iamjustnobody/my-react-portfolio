import React from 'react';
import App from './App';
import {Switch,Route} from "react-router-dom";

export const Apps=()=>{
    return (
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/XW" component={App}/>
            <Route path="/XW/SDE" component={App}/>
            <Route component={App}/>
        </Switch>
    );
}