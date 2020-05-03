import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button } from 'antd';
import './Sections/Header.scss';
import MenuBtn from '../Menu/Menu';
const Logo = '';

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
        <div className="menu__logo">
          <a href="/">
            <img src={Logo} alt="Logo" style={{ width: '100%', marginTop: '-5px' }} />
          </a>
        </div>
        <div className="menu__container">
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            AAAA
          </Button>
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