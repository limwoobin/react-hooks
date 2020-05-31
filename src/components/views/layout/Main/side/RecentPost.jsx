import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/Call_API';
import {Link} from 'react-router-dom';

const RenderPostTitle = (posts) => {
    return <div>
             {posts.map((c) => {
                 return <Link to={`/ctg/post/id/${c._id}`} style={{ textDecoration: 'none' }}>
                            <h3><li><p>{c.title}</p></li></h3>
                        </Link>
             })}
           </div>
}

const RecentPost = () => {
    const [postTitle , setPostTitle] = useState([]);
    useEffect(() => {
         API.Get_RecentPosts()
         .then(res => {
             console.log(res);
            setPostTitle(res.data.data);
         }).catch(err => {
            console.log(err);
         })
    } , []);

    return (
        <section className="sc-fAjcbJ fNlsam sc-gisBJw kPSwsK">
            <h4>최신글</h4>
            <ol>
                {postTitle.length === 0 
                    ? <h3>최신글이 없습니다.</h3>
                    : RenderPostTitle(postTitle)}
            </ol>
        </section>
    )
}

export default RecentPost;