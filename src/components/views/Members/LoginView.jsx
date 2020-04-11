import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Member.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '30ch',
      // width: '1000px',
    },
  }));
  

const LoginView = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div>
            <TextField
                className={classes.textField}
                id="filled-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                margin="normal"
                InputLabelProps={{shrink: true,}}
                variant="filled"
            />
            </div>
        </div>
    )
}

export default LoginView;