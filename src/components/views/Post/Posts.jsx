import React , { useState , useEffect } from 'react';
import {API} from '../../../api/Call_API';
import Post from './Post';
import {Func} from '../../../common/common';
import './scss/Posts.scss';

const renderPost = (posts) => {
    console.log(posts);
    return posts 
        ? '게시된 포스트가 없습니다.'
        : posts.map(c => {
            return <Post />
        })
};

const redner = () => {
    return 'aaasdasd';
}

const Posts = (props) => {
    const postKeyword = props.match.params.postKeyword;
    const [posts , setPosts] = useState([]);

    useEffect(() => {
        API.Get_Posts(postKeyword)
        .then(res => {
            if(res.data.code === 'DR00') setPosts(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    } , []);
    return (
        <div>
            {renderPost(posts)}
        </div>
    )
}

export default Posts;