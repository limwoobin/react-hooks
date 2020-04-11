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
   ,LoginView
} 
from '../../../page/page';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginView} />
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