import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChildComment from './ChildComment';
import { Func } from '../../../common/common';
import UserAvatar from '../Members/UserAvatar';

const Comment = (props) => {
    const {image , userEmail , content , modiDate , childComments} = props;
    const renderChildComments = (data) => {
        console.log('data:' + data);
        return data.map((c) => {
            return <ChildComment 
                        key={c._id}
                        image={c.image}
                        childCommentId={c.childCommentId}
                        userEmail={c.userEmail}
                        content={c.content}
                        modiDate={c.modiDate}
                    />
        });
    }

    return (
        <div className="sc-kTUwUJ iqjCNk comment">
            <div className="sc-dqBHgY gYeJel">
                <div className="profile">
                    <a><UserAvatar imgPath={image} /></a>
                    <div className="comment-info">
                        <div className="userEmail">
                            <a>{userEmail}</a>
                        </div>
                        <div className="date">
                            {Func.DateFormat(modiDate)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sc-ktHwxA fujwZh">
                <div className="sc-gxMtzJ cNHItw">
                    <p>{content}</p>
                    <Divider />
                </div>
            </div>
        </div>
    )
}

export default Comment;