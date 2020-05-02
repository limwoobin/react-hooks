import React , {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import useInputs from '../../../hooks/useInputs';


const styles = theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '200px',
        },
      },
      textField:{
        width: '50%',
      },
      progress: {
        margin: theme.spacing.unit * 2
      },
});

const BoardWrite = () => {

    const [value , setValue] = useState({
        title : '',
        userEmail : '',
        content : '',
        boardType : '02',
    });

    const handleValueChange = (e) => {
        setValue({
          ...value , [e.target.name] : e.target.value
        })
      }

    const handleBoardWrite = () => {

    }
    
    return (
        <div classes={styles.root}>
        <CssBaseline />
        <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#F6F6F6' , minHeight:'100%' , fontSize: '15px' , textAlign: 'left'}}>
            <div>
                <div>
                    제목 : <TextField className={styles.textField} label="title"  name="title" variant="outlined" onChange={handleValueChange} /> <br/>
                    작성자 : {window.sessionStorage.loggedInUserEmail}<br/>
                    <br /><br />
                    <Divider />
                    내용 : <TextField className={styles.textField} label="content" name="content" variant="outlined" onChange={handleValueChange} /> <br/> 
                    <br /><br />
                </div>
                <Button variant="contained" color="primary" onClick={handleBoardWrite}>작성</Button> 
                <Divider />
            </div>
        </Typography>
        </Container>
        </div>
    )
}

export default BoardWrite;