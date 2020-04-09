import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';

function RightMenu(props) {
  const user = '';
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/login">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/register">Signup</a>
      </Menu.Item>
    </Menu>
  )
} 

export default RightMenu;