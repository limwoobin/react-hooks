import React from 'react';
import './MyProfile.scss';
import {Link} from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className="sc-jhAzac dvLbCX">
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