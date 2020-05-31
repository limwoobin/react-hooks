import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { Func } from '../../../common/common';

const Notice = (props) => {
    const {_id , boardId , userEmail , title , views , regDate , image} = props;

    return (
         <TableRow key={boardId}>
            <TableCell component="th" scope="row" align="left">{userEmail}</TableCell>
            <TableCell align="left">
                <Link to={`/ctg/notice/id/${_id}`} 
                        key={boardId}
                >
                    {title}
                </Link>
            </TableCell>
            <TableCell align="right">{views}</TableCell>
            <TableCell align="right">
                {Func.DateFormat(regDate)}
            </TableCell>
        </TableRow>
    )
}

export default Notice;