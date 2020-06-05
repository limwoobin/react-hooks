import React , { useState , useEffect } from 'react';
import {API} from '../../../api/Call_API';
import Post from './Post';
import {Func} from '../../../common/common';
import './scss/Posts.scss';

const renderPost = (posts) => {
    return posts 
        ? '게시된 포스트가 없습니다.'
        : posts.map(c => {
            return <Post />
        })
};

const Posts = (props) => {
    console.log(props);
    const postKeyword = props.match.params.postKeyword;
    const [posts , setPosts] = useState([]);
    
    useEffect(() => {
        API.Get_Posts(postKeyword)
        .then(res => {
            console.log(res);
            if(res.data.code === 'DR00') setPosts(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    } , []);


    return (
        <div>
            {/* {renderPost(posts)} */}
            <Post />
        </div>
    )
}

export default Posts;