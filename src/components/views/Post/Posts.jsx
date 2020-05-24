import React , { useState , useEffect } from 'react';

const Posts = (props) => {
    const postKeyword = props.match.params.postKeyword;
    useEffect(() => {
        
    } , []);
    return (
        <div>
            {postKeyword}
        </div>
    )
}

export default Posts;