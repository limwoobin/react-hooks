import React , {useState , useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Notice from './Notice';
import { API } from '../../../api/Call_API';
import './Notice.scss';

const notices = (data) => {
    return <>
              {data.map((c) => {
                  return <Notice
                            key={c._id}
                            _id={c._id}
                            boardId={c.boardId}
                            userEmail={c.userEmail} 
                            boardType={c.boardType} 
                            title={c.title}
                            content={c.content}
                            regDate={c.regDate}
                            views={c.views}
                            image={c.image}
                        />
              })}
           </> 
}

const NoticeList = () => {
    const [value , setValue] = useState({
        notices: [],
        completed: 0
    });

    useEffect(() => {
        API.GET_BoardList('notice')
        .then(res => {
            console.log(res.data.data);
            setValue({
                ...value,
                notices: res.data.data
            })
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="table">
            <div className="addBtn">
            </div>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">작성자</TableCell>
                            <TableCell align="left">제목</TableCell>
                            <TableCell align="right">조회수</TableCell>
                            <TableCell align="right">등록일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {value.notices.length !== 0 
                            ? notices(value.notices) 
                            : <TableRow>
                                    <TableCell colSpan="4" align="center">
                                    <CircularProgress  />
                                    {/* 게시글이 없습니다. */}
                                    </TableCell>
                                </TableRow>
                        }
                    </TableBody>
                </Table>    
            </TableContainer>    
        </div>
    )
}

export default NoticeList;