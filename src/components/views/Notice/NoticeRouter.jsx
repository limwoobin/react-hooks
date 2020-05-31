import React from 'react';
import {Route} from 'react-router-dom';
import NoticeList from './NoticeList';
import NoticeView from './NoticeView';

const NoticeRouter = ({match}) => {
    
    return (
        <div>
            <Route exact path={match.path} component={NoticeList} />
            <Route path={`${match.path}/id/:id`} component={NoticeView} />
        </div>
    )
}

export default NoticeRouter;