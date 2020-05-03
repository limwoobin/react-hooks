import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Header.scss';
import MenuBtn from '../Menu/Menu';

function Header() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <div className="header_area">
      <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="menu__btn" >
          <MenuBtn />
        </div>
        <div className="menu__logo" >
          <a href="/" style={{ textDecoration: 'none'}}>
            Drogbalog
          </a>
        </div>
        <div className="menu__container">
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    </div>
  )
}

export default Header