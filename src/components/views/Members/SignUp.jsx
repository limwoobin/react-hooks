import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateForm from '../../common/DateForm';
import CopyRight from '../../common/CopyRight';
import { Func } from '../../../common/common';
import { API } from '../../../api/Call_API';

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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
    const classes = useStyles();
    const [value , setValue] = useState({
        userNm      : '',
        userEmail   : '',
        password    : '',
        password2   : '',
        birthday    : Func.DateFormat2(new Date()),
        userPhone   : '',
        accept      : false
    });

    const {userNm , userEmail , password , password2 , birthday , userPhone , accept} = value;

    const BirthdayCallback = (callBackDate) => {
        setValue({
            ...value , birthday : callBackDate
        })
    };

    const onlyNumberChange = (e) => {
        const re = /^[0-9\b]+$/;
        if(e.target.value == '' || re.test(e.target.value)){
            setValue({
                ...value , [e.target.name] : e.target.value
            })
        }
        return;
    }

    const handleValueChange = (e) => {
        setValue({
            ...value , [e.target.name] : e.target.value
        })
    }
    
    const toggleCheckbox = (e) => {
        setValue({
            ...value,
            [e.target.name] : !accept
        })
    }

    const SignUpSubmit = () => {
        if(!Func.emptyCheck(userNm)){
            alert('이름을 입력해주세요.');
            return;
        }else if(!Func.setVerifyEmail(userEmail)){
            alert('이메일을 확인해주세요.');
            return;
        }else if(!Func.passwordCheck(password)){
            alert('숫자와 영문자 조합으로 8~12 자리를 사용해야 합니다.');
            return;
        }else if(password !== password2){
            alert('패스워드가 일치하지 않습니다.');
            return;
        }else if(!accept){
            alert('약관을 동의해주세요.');
            return;
        }
        addMemberInfo();
    }
    
    const addMemberInfo = () => {
        const formData = new FormData();
        formData.append('userNm' , userNm);
        formData.append('userEmail' , userEmail);
        formData.append('userPwd' , password);
        formData.append('birthday' , birthday);
        formData.append('userPhone' , userPhone);
        API.ADD_Member(formData)
        .then(res => {
            console.log(res);
            if(res.data.code === 'DR00'){
                alert('회원가입이 되었습니다.');
                window.location.href = "/login";
            }
        }).catch(err => {
            console.log(err);
            alert('회원가입에 실패하였습니다.');
            window.location.href = "/register";
        })
    }
    
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            회원가입
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="name"
                    name="userNm"
                    onChange={handleValueChange}
                    value={userNm}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    name="userEmail"
                    onChange={handleValueChange}
                    value={userEmail}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleValueChange}
                    value={password}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Password Check"
                    type="password"
                    onChange={handleValueChange}
                    value={password2}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="userPhone"
                    label="Phone number( - 없이 입력해주세요.)"
                    type="userPhone"
                    onChange={onlyNumberChange}
                    value={userPhone}
                />
                </Grid>
                <Grid item xs={12}>
                <DateForm callBackDate={BirthdayCallback}/>
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox color="primary" value={accept} onClick={toggleCheckbox}/>}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                    name="accept"
                />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={SignUpSubmit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link to="/login" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <CopyRight />
        </Container>
    )
}

export default SignUp;