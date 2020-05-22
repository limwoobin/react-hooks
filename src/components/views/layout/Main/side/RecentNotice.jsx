import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/Call_API';
import {Link} from 'react-router-dom';

const NoticePost = () => {
    const [noticeTitle , setNoticeTitle] = useState([]);
    useEffect(() => {
         API.Get_RecentNotice()
         .then(res => {
            setNoticeTitle(res.data.data);
         }).catch(err => {
            console.log(err);
         })
    })

    const renderNoticeTitle = noticeTitle.map((c) => {
        <Link to={`/ctg/notice/id/${_id}`}>
            <li>{c.title}</li>
        </Link>
    })
    

    return (
        <section className="sc-fAjcbJ fNlsam sc-caSCKo wDGYV">
            <h4>공지사항</h4>
            <ul>
                {noticeTitle.length === 0 
                    ? <h3>공지사항이 없습니다.</h3>
                    : renderNoticeTitle}
            </ul>
        </section>
    )
}

export default NoticePost;