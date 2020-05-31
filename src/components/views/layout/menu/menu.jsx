import React , { useState , useEffect } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { API } from '../../../../api/Call_API';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { Func } from '../../../../common/common';
import './Menu.scss';


const useStyles = makeStyles({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      }
});

const menuList = (menuItems) => {
    return <div>
                <List>
                    {menuItems.sort(Func.Compare('id')).map((c) => {
                        if(c.type !== 'post') {
                            return <Link to={`/ctg/${c.routerName}`} key={c.id} className="listItem" style={{ textDecoration: 'none'}}>
                                        <ListItem button key={c.name}>
                                            <ListItemText primary={c.name} className="menuItem" />
                                        </ListItem>
                                    </Link>
                        }
                    })}
                </List>
                <Divider />
            </div>
}

const postList = (menuItems) => {
    return <div>
                <List>
                    {menuItems.sort(Func.Compare('id')).map((c) => {
                        if(c.type === 'post') {
                            return <Link to={`/ctg/posts/${c.routerName}`} key={c.id} className="listItem" style={{ textDecoration: 'none'}}>
                                        <ListItem button key={c.name}>
                                            <ListItemText primary={c.name} className="menuItem" />
                                        </ListItem>
                                   </Link>
                        }
                    })}
                </List>
           </div>
}

const Menu = () => {
    const classes = useStyles();
    const [left , setLeft] = useState(false);
    const [menuItems , setMenuItems] = useState([]);

    useEffect(() => {
        _GetMenuItems();
    } , []);

    const _GetMenuItems = async () => {
        const categories = await API.GET_Categories();
        setMenuItems(categories.data.data);
    }

    const openSide = () => (
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className={clsx(classes.list)}
        >
          {menuList(menuItems)}
          {postList(menuItems)}
        </div>
      );

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setLeft(open);
    }

    return (
        <div className="menu__btn">
            <IconButton 
                color='inherit' 
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer open={left} onClose={toggleDrawer(false)}>
                {openSide('left')}
            </Drawer>
        </div>
    )
}

export default Menu;