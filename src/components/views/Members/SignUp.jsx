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
        name: '',
        userEmail: '',
        password: '',
        password2: '',
        birthday: Func.DateFormat2(new Date()),
        accept : false
    });

    const {name , userEmail , password , password2 , birthday , accept} = value;

    const BirthdayCallback = (callBackDate) => {
        setValue({
            ...value , birthday : callBackDate
        })
    };

    const handleValueChange = (e) => {
        setValue({
            ...value , [e.target.name] : e.target.value
        })
    }
    
    const toggleCheckbox = (e) => {
        console.log('e' , e.target.value);
        console.log(typeof e.target.value);
        if(e.target.value === 'false'){
            setValue({
                ...value , [e.target.name] : true
            })
        }else{
            setValue({
                ...value , [e.target.name] : false
            })
        }
    }

    const SignUpSubmit = () => {
        console.log('name' , name);
        console.log('userEmail' , userEmail);
        console.log('password' , password);
        console.log('password2' , password2);
        console.log('birthday' , birthday);
        console.log('accept' , accept);
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
            {accept === false ? 'false' : 'true'}
            <br />{name}
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="name"
                    name="name"
                    onChange={handleValueChange}
                    value={name}
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