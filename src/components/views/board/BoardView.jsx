import React , {useState , useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { API } from '../../../api/Call_API';
import { Func } from '../../../common/common';
import Comment from '../../views/comment/Comment';

const BoardView = (props) => {
    const [value , setValue] = useState({
        _id: '',
        id: props.match.params.id,
        views: 0,
        userEmail: '',
        boardType: '',
        title: '',
        content: '',
        comments: [],
        regDate: '',
    })

    const {_id , id , views , userEmail , boardType , title , content , comments , regDate} = value;

    useEffect(() => {
        API.GET_BoardData(id)
        .then(res => {
            console.log(res.data);
            const resData = res.data.data;
            setValue({
                ...value,
                _id : resData._id,
                views: resData.views,
                userEmail: resData.userEmail,
                boardType: resData.boardType,
                title: resData.title,
                content: resData.content,
                comments: resData.comments,
                regDate: Func.DateFormat(resData.regDate),
            })
        }).catch(err => {
            console.log(err);
        })
    },[]);

    const renderComments = (data) => {
        return data.map((c) => {
            return <Comment 
                        key={c._id}
                        commentId={c.commentId}
                        userEmail={c.userEmail}
                        content={c.content}
                        modiDate={c.modiDate}
                        childComments={c.childComments}
                   />  
        })
    }

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="md">
            <Typography component="div" style={{ backgroundColor: '#F6F6F6' , minHeight:'100%' , fontSize: '15px' , textAlign: 'left'}}>
            <div>
                조회수 : {views} <br/>
                제목 : {title} <br/>
                작성자 : {userEmail} <br/>
                작성일시 : {regDate} <br/>
                <br /><br />
                <Divider />
                내용 : {content} <br/>
                <pre>
                    <code>var x = 5;</code>
                </pre>  
                <br /><br />
            </div>
            <Divider />
            {comments ?
                renderComments(comments) :
                '댓글이 없습니다.'
            }
            </Typography>
            </Container>
        </div>
    )
}

export default BoardView;