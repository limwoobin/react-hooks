import React from 'react';
import {Route} from 'react-router-dom';
import Posts from './Posts';
import PostView from './PostView';
import PostWrite from './PostWrite.jsx';

const PostRouter = ({match , location}) => {
    return (
        <div>
            <Route exact path={`${match.path}/:postType`} component={Posts} />
            <Route path={`${location.pathname}/id/:id`} component={PostView} />
            <Route path={`${location.pathname}/write`} component={PostWrite} />
        </div>
    )
}

export default PostRouter;