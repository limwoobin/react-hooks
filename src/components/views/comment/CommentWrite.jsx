import React , {useState} from 'react';
import './Comment.scss';
import { API } from '../../../api/Call_API';

const CommentWrite = (props) => {
    const [content , setContent] = useState('');
    const {_id , userEmail} = props;

    const handleValueChange = (e) => {
        setContent(e.target.value);
      }

    const writeComment = () => {
        if(!userEmail){
            alert('로그인 후 이용해주세요.');
            return;
        }else if(!content){
            alert('댓글을 입력해주세요.');
            return;
        }
        const data = {
            'userEmail':userEmail,
            '_id':_id,
            'content':content
        };
        API.CommentInsert(JSON.stringify(data))
        .then(res => {
            console.log(res);
            if(res.data.code !== 'DR00') alert('잠시 후 다시 시도해주세요.')
        }).catch(err => {
            console.log(err);
        });
    }

    

    return (
        <div className="sc-jwKygS zJaCr">
            <textarea placeholder="댓글을 작성하세요" name="content" className="sc-btzYZH BVLvn" onChange={handleValueChange} />
            <div className="buttons-wrapper">
                <button color="teal" className="sc-dnqmqq gzELJz" onClick={writeComment}>댓글 작성</button>
            </div>
        </div>
    )
}

export default CommentWrite;