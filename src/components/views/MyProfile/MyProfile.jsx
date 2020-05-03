import React from 'react';
import './MyProfile.scss';
import {Link} from 'react-router-dom';

const MyProfile = () => {
    return (
        <div className="sc-jhAzac dvLbCX">
            {/* <Link to="" className="sc-hzDkRC ebEzFW" style={{ textDecoration: 'none' }}>
                <div className="sc-Rmtcm dxtZdc" style={{paddingTop: '10.19206680584551%'}}>
                    <img src="https://media.vlpt.us/images/chajanee/post/d36b7bde-7c67-42db-bb2c-ec8eb34409f4/차차퇴사.JPG?w=640" />
                </div>
            </Link> */}
                <div className="sc-fBuWsC eBFCWh">
                    <Link to="" className="sc-hzDkRC ebEzFW" style={{ textDecoration: 'none' }}>
                        <h4>좆까씨발아</h4>
                        <div className="description-wrapper">
                            <p>좆까개새끼야</p>
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