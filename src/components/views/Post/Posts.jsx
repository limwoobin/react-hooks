import React , { useState , useEffect } from 'react';
import {API} from '../../../api/Call_API';
import Post from './Post';
import PostTitle from './PostTitle';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from '../layout/Footer/Footer';
import {Func} from '../../../common/common';
import './scss/Posts.scss';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const renderPost = (posts) => {
    console.log(posts);
    return posts 
        ? posts.map(c => {
            return <Post 
                      id={c}
                   />
        })
        : '게시된 포스트가 없습니다.'
};

const Posts = (props) => {
    const classes = useStyles();

    const postType = props.match.params.postType;
    const [posts , setPosts] = useState([]);

    useEffect(() => {
        API.Get_Posts(postType)
        .then(res => {
            console.log(res);
            if(res.data.code === 'DR00') setPosts(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    } , []);

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <main>
                    <PostTitle type={postType} />
                    <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {renderPost(posts)}
                    </Grid>
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
        </div>
    )
}

export default Posts;