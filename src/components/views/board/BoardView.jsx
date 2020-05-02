import React , {useState , useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { API } from '../../../api/Call_API';
import { Func } from '../../../common/common';
import Comment from '../../views/comment/Comment';
import CommentWrite from '../../views/comment/CommentWrite';
import './BoardView.scss';


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

    const {_id , id , views , userEmail , boardType , title , content , comments , regDate , image} = value;

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
        <div className="main">
            <CssBaseline />
            <Container maxWidth="md">
            <Typography component="div" className="mainArea">
            <div className="sc-kgAjT gXJKuQ sc-gGBfsJ kVIKkh">
                <div className="head-wrapper">
                    <h1 align="left">
                        {title}
                    </h1>
                    <div className="sc-jnlKLf efgoQf">
                        <div className="information">
                            <span className="userEmail">{userEmail}</span>
                            <span className="separator">·</span>
                            <span>{regDate}</span>
                        </div>
                        <div className="sc-hEsumM dBRwrG">
                            조회수: {views}
                        </div>
                    </div>
                    <img src="https://media.vlpt.us/images/snoop2head/post/9215b9f1-3c39-4ca0-9ab9-e03a048545f8/running-573762_1920.jpg" alt="post-thumbnail" className="sc-tilXH cAPLHZ" />
                </div>
            </div>
            <div className="sc-feJyhm kMGsFz">
                <div className="sc-cIShpX cnidFS atom-one-light">
                    <div className="sc-cIShpX cnidFS atom-one-light">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
            <div className="sc-kgAjT gXJKuQ sc-iELTvK cGalOa">
                <h4>N의 댓글</h4>
                <div className="sc-cmTdod kHxQNt">
                    <CommentWrite />
                    <div className="sc-hwwEjo hQpbXX">

                    </div>
                </div>
            </div>
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