import React from 'react';
import {Route} from 'react-router-dom';
import BoardList from './BoardList';
import BoardView from './BoardView';
import BoardWrite from './BoardWrite';

const BoardRouter = ({match , location}) => {
    return (
        <div>
            <Route exact path={match.path} component={BoardList} />
            <Route path={`${match.path}/id/:id`} component={BoardView} />
            <Route path={`${match.path}/write`} component={BoardWrite} />
        </div>
    )
}

export default BoardRouter;