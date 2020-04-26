import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChildComment from './ChildComment';
import { Func } from '../../../common/common';

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
        <div>
            {image}{userEmail} : {content} &nbsp; {Func.DateFormat(modiDate)} <br/>
            {childComments ? renderChildComments(childComments)
            : ''}
            &nbsp;
            <Divider />
        </div>
    )
}

export default Comment;