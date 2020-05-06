import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './ProfileView.scss';

const ProfileView = () => {
    return (
        <div className="main">
            <CssBaseline />
            <Container maxWidth="md">
            <Typography component="div" className="mainArea">
            <div className="sc-kgAjT gXJKuQ sc-gGBfsJ kVIKkh">
                <div className="head-wrapper">
                    <h1 align="left">
                        사이트 개발자 소개!!!
                    </h1>
                    <div className="sc-jnlKLf efgoQf">
                        <div className="information">
                            <span className="userEmail">drogbacuty@gmail.com</span>
                            <span className="separator">·</span>
                            <span>임우빈</span>
                        </div>
                    </div>
                    <img src="https://news.bbsi.co.kr/news/photo/201601/722316_23239_4041.jpg" alt="post-thumbnail" className="sc-tilXH cAPLHZ" />
                </div>
            </div>
            <div className="sc-feJyhm kMGsFz">
                <div className="sc-cIShpX cnidFS atom-one-light">
                    <div className="sc-cIShpX cnidFS atom-one-light">
                        <p>
                            <h4>
                                <ul>
                                <li>이름 : 임우빈</li>
                                <li>영어이름 : Drogba</li>
                                <li>나이 : 27</li>
                                <li>거주지 : 서울</li>
                                <li>email : drogbacuty@gmail.com</li>
                                <li>취미 : 당구(3구 200)</li>
                                <li>직업 : 개발자</li>
                                <li>존경하는 사람 : 드록바</li>
                                <li>Github : <a href="https://github.com/limwoobin" target="_blank">https://github.com/limwoobin</a></li>
                                <li>내가 지향하는 방향 : 풀스택을 지향하며 계속 발전하는 개발자가 되고싶은 사람입니다. 계속 발전하는 맛에 살고싶습니다.</li>
                                <li>내 기술스택 : Node.js , Express , React hooks , Java Script , Java , Spring Boot , mysql , mongodb , redis , network</li>
                                <li>하고싶은 것 : 영어 공부 , Go , docker , Kubernetes , Type Script 그 외에 현재 알고 있는 지식들을 좀 더 깊숙히...</li>
                                <br /><br />
                                <li>사이트 기술 스택</li>
                                Node.js , React hooks , Express , MongoDB ...
                                </ul>
                            </h4>
                        </p>
                    </div>
                </div>
            </div>
            </Typography>
            </Container>
        </div>
    )
}

export default ProfileView;