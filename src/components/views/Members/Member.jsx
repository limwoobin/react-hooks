import React , {useState , useEffect} from 'react';
import './Member.scss';
import RedirectToLogin from '../../common/RedirectToLogin';
import MyPageSideBar from './MyPageSideBar';
import MyPage from './MyPage';

const Member = () => {
    useEffect(() => {

    });

    return (
        <div id="myPage">
            {/* <RedirectToLogin /> */}
            <MyPageSideBar />
            <MyPage />
        </div>
    )
}

export default Member;