import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { API } from '../../../../../api/Call_API';
import './Header.scss';

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
                        <Link to="/login" className="link-router" style={{ textDecoration: 'none' }}>
                          [{loggedInUserEmail}]
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="logout" onClick={userLogout}>
                          <Link to="#" className="link-router" style={{ textDecoration: 'none' }}>Logout</Link>
                        </Menu.Item>
                      </Menu>
                    </>;
  }else{
    renderSignbtn = <>
                      <Menu mode={props.mode}>
                        <Menu.Item key="login">
                          <Link to="/login" className="link-router" style={{ textDecoration: 'none' }}>Signin</Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                          <Link to="/register" className="link-router" style={{ textDecoration: 'none' }}>SignUp</Link>
                        </Menu.Item>
                      </Menu>
                    </>;
  }
  return (
      <div className="menu_right">
        {renderSignbtn}
      </div>
  )
} 

export default RightMenu;