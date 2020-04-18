import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const RightMenu = (props) => {  
  const isLogin = window.sessionStorage.getItem('isLogin');
  const loggedInUserEmail = window.sessionStorage.getItem('loggedInUserEmail');

  const userLogout = () => {
    console.log('logout');
  }

  let renderSignbtn = null;
  if(isLogin){
    renderSignbtn = 
                    <>
                      <Menu mode={props.mode}>
                        <Menu.Item key="mail" onClick={userLogout}>
                          <Link to="#">Logout</Link>
                        </Menu.Item>
                      </Menu>
                    </>;
  }else{
    renderSignbtn = <>
                      <Menu mode={props.mode}>
                        <Menu.Item key="mail">
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