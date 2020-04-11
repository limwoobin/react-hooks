import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RightMenu = (props) => {  
  const user = '';
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/login">Signin</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/register">Signup</a>
      </Menu.Item>
    </Menu>
  )
} 

export default RightMenu;