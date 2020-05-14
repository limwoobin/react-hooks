import React , { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link , Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CopyRight from '../../common/CopyRight';
import FindPasswordForm from './FindPasswordForm';
import { Func } from '../../../common/common';
import { API } from '../../../api/Call_API';
import RedirectToMain from '../../common/RedirectToMain';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main, 
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignIn = () => {
    const classes = useStyles();
    const [value , setValue] = useState({
      userEmail : '',
      password : '',
      rememberEmail : false,
    });

    const { userEmail , password , rememberEmail } = value;

    const handleValueChange = (e) => {
      setValue({
        ...value , [e.target.name] : e.target.value
      })
    }
    
    const toggleCheckbox = (e) => {
      setValue({
          ...value,
          [e.target.name] : !rememberEmail
      })
    }

    const LoginSubmit = () => {
        if(!Func.setVerifyEmail(userEmail)){
          alert('이메일을 확인해주세요.');
          return;
        }else if(!Func.emptyCheck(password)){
          alert('비밀번호를 입력해주세요.');
          return;
        }
        memberLogin();
    }

    const memberLogin = () => {      
      const formData = new FormData();
      formData.append('userEmail' , userEmail);
      formData.append('userPwd' , password);
      API.LOGIN(formData)
      .then(res => {
        console.log(res);
        if(res.data.code === 'DR00'){
          window.sessionStorage.isLogin=true;
          window.sessionStorage.loggedInUserEmail = userEmail;
          window.location.href = "/";
        }
      }).catch(err => {
        console.log(err);
      });
    }

    return(
      <div>
        <RedirectToMain />
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="userEmail"
              onChange={handleValueChange}
              value={userEmail}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handleValueChange}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox color="primary" value={rememberEmail} onClick={toggleCheckbox}/>}
              label="Remember me"
              name="rememberEmail"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={LoginSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <FindPasswordForm />
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <CopyRight />
      </Container>
      </div>
    )
}

export default SignIn;