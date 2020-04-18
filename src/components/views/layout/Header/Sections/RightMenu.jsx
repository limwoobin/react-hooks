import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { API } from '../../../../../api/Call_API';

const RightMenu = (props) => {  
  const isLogin = window.sessionStorage.getItem('isLogin');
  const loggedInUserEmail = window.sessionStorage.getItem('loggedInUserEmail');

  const userLogout = () => {
    API.LOGOUT()
    .then(res => {
      console.log(res);
      if(res.data.code === 'DR00'){
        window.sessionStorage.removeItem('isLogin');
        window.sessionStorage.removeItem('loggedInUserEmail');
        window.location.reload();
      }
    }).catch(err => {
      console.log(err);
    })
  }

  let renderSignbtn = null;
  if(isLogin){
    renderSignbtn = 
                    <>
                      <Menu mode={props.mode}>
                      <Menu.Item key="user">
                        <Link to="#">
                          [{loggedInUserEmail}] 님 환영합니다.
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="logout" onClick={userLogout}>
                          <Link to="#">Logout</Link>
                        </Menu.Item>
                      </Menu>
                    </>;
  }else{
    renderSignbtn = <>
                      <Menu mode={props.mode}>
                        <Menu.Item key="login">
                          <Link to="/login">Signin</Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                          <Link to="/register">SignUp</Link>
                        </Menu.Item>
                      </Menu>
                    </>;
  }
  return (
      <div>
        {renderSignbtn}
      </div>
  )
} 

export default RightMenu;