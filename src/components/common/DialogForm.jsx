import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const DialogForm = () => {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        setOpen(true);
    },[]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <Button onClick={handleClose} color="primary" autoFocus>
                Agree
            </Button>
            </Dialog>
        </div>
    )
}

export default DialogForm;