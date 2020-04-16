import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from '../../../Home';
import NoMatch from '../../../NoMatch';
import { 
    Profile
   ,Notice
   ,Map
   ,Think
   ,BoardList
   ,SignIn
   ,SignUp
   ,test
} 
from '../../../page/page';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
                <Route path="/hooks" component={test} />
                    <Route path = "/ctg/profile" component={Profile} />    
                    <Route path = "/ctg/notice" component={Notice} />
                    <Route path = "/ctg/think" component={Think} />
                    <Route path = "/ctg/board" component={BoardList} />
                    <Route path = "/ctg/map" component={Map} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Main;