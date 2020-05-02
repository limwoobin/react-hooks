import React , {useState , useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Board from './Board';
import { API } from '../../../api/Call_API';
import './Board.scss';


const BoardList = () => {
    const [value , setValue] = useState({
        boards: [],
        completed: 0
    });


    useEffect(() => {
        API.GET_BoardList()
        .then(res => {
            console.log(res.data.data);
            setValue({
                ...value,
                boards: res.data.data
            })
        }).catch(err => {
            console.log(err);
        })
    }, []);

    const boards = (data) => {
        return data.map((c) => {
            return <Board
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
        })
    }

    return (
        <div className="table">
            <div className="addBtn">
                <Link to="/ctg/board/write">
                    <Button variant="contained" color="primary">추가</Button>
                </Link>
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
                            {value.boards.length !== 0 ?
                                boards(value.boards) : 
                                <TableRow>
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

export default BoardList;