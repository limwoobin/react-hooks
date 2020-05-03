import React from 'react';
import { Route , Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './Main.scss';
import { 
    Notice
   ,Map
   ,Think
   ,SignIn
   ,NoMatch
   ,SignUp
   ,test
   ,BoardRouter
} 
from '../../../page/pages';

const Main = () => {
    return (
        <div className="mainDiv" style={{backgroundColor: 'white'}}>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/ctg/notice" component={Notice} />
                <Route path="/ctg/think" component={Think} />
                <Route path="/ctg/board" component={BoardRouter} />
                <Route path="/ctg/map" component={Map} />
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/hooks" component={test} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Main;