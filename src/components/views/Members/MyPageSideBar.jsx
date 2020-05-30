import React from 'react';
import './Member.scss';


const MyPageSideBar = () => {
    return (
        <div id="mFeature">
            <h2 className="screen_out" />
            <div className="aside_profile">
                <div className="wrap_thumb">
                    <a href="">
                        <img src="//img1.daumcdn.net/thumb/C100x100/?scode=mtistory2&amp;fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2Fuser%2F4143517%2Fprofile%2FprofileImg%3Fv%3D1582971170319" width="100" height="100" className="thumb_img" alt="" />
                    </a>
                </div>
                <div className="wrap_cont">
                    <h3 className="screen_out">프로필</h3>
                    <strong className="tit_profile">큐티드록바</strong>
                    <span className="txt_ellip">drogbacuty@gmail.com</span>
                </div>
            </div>
            <div id="kakaoLnb" className="aside_menu" role="navigation">
                <strong className="tit_menu tit_line on">내 블로그</strong>
                <div>
                    <strong className="tit_menu"><span className="ico_member ico_account"></span>내 계정</strong>
                    <ul className="list_menu">
                        <li><a className="link_menu" href="/member/account/info">기본 정보</a></li>
                        <li><a className="link_menu" href="/member/account/profileLayer">프로필 레이어</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyPageSideBar;