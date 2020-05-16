import React , {useState} from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {API} from '../../../api/Call_API';

const FindPasswordForm = () => {
    const [open , setOpen] = useState(false);
    const [toEmail , setToEmail] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const sendMail = () => {
        API.FindforPassword(toEmail)
        .then(res => {
            console.log(res);
            alert('임시 패스워드를 보내드렸습니다. 메일을 확인해주세요.');
            setOpen(false);
        }).catch(err => {
            console.log(err);
            alert('메일전송에 실패했습니다. 잠시후 다시 시도해주세요.');
            setOpen(false);
        })
      }

      const onChange = (e) => {
        setToEmail(e.target.value);
      }

    return (
        <div>
            <Link href="#" variant="body2" onClick={handleClickOpen}>
                Forgot password?
            </Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">패스워드 찾기</DialogTitle>
                <DialogContent>
                <DialogContentText>
                To be find your password, please enter your email address here. We will send temporary password.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    name="toEmail"
                    onChange={onChange}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={sendMail} color="primary">
                    Send
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FindPasswordForm;