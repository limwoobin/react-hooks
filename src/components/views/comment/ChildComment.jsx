import React from 'react';
import { Func } from '../../../common/common';

const ChildComment = (props) => {
    const {image , userEmail , content , modiDate} = props;

    return (
        <div>
            &nbsp;&nbsp;&nbsp; {image}{userEmail} : {content} &nbsp; {Func.DateFormat(modiDate)} <br/>
        </div>
    )
}

export default ChildComment;