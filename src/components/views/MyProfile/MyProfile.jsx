import React from 'react';
import './MyProfile.scss';
import {Link} from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className="sc-jhAzac dvLbCX">
            <Link to="/ctg/profile" className="sc-hzDkRC ebEzFW">
            <div style={{ paddingTop: '52.19206680584551%' }}  className="sc-Rmtcm dxtZdc">
                <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F246A4A4453D30B822B" />
            </div>
            </Link>
            <div className="sc-fBuWsC eBFCWh">
                <Link to="/ctg/profile" className="sc-hzDkRC ebEzFW" style={{ textDecoration: 'none' }}>
                    <h3>개발자 소개 바로가기</h3>
                    <div className="description-wrapper">
                        <p>
                            이름 : 임우빈 <br />
                            나이 : 27 <br />
                            거주지 : 서울 <br />
                            사이트 기술 스택 <br />
                            Node.js , React hooks , Express , MongoDB ...
                        </p>
                    </div>
                </Link>
                <div className="sub-info">
                    <span>개발자 자기소개...</span>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;