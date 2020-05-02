import React from 'react';
import './Comment.scss';


const CommentWrite = () => {
    return (
        <div className="sc-jwKygS zJaCr">
            <textarea placeholder="댓글을 작성하세요" className="sc-btzYZH BVLvn" />
            <div className="buttons-wrapper">
                <button color="teal" className="sc-dnqmqq gzELJz">댓글 작성</button>
            </div>
        </div>
    )
}

export default CommentWrite;