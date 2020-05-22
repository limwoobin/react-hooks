import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/Call_API';
import {Link} from 'react-router-dom';

const RecentPost = () => {
    const [postTitle , setPostTitle] = useState([]);
    useEffect(() => {
         API.Get_RecentPost()
         .then(res => {
            setPostTitle(res.data.data);
         }).catch(err => {
            console.log(err);
         })
    })

    const renderPostTitle = postTitle.map((c) => {
        <Link to={`/ctg/posts/id/${_id}`}>
            <li>{c.title}</li>
        </Link>
    })

    return (
        <section className="sc-fAjcbJ fNlsam sc-gisBJw kPSwsK">
            <h4>최신글</h4>
            <ul>
                {postTitle.length === 0 
                    ? <h3>최신글이 없습니다.</h3>
                    : renderPostTitle}
            </ul>
        </section>
    )
}

export default RecentPost;