import React , { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

const menuList = () => {
    const arr = ['map' , 'test ' , 'test2'];
    <div>
        <List>
            {arr.map((c) => {
                <ListItem>
                    <ListItemText primary={c} />
                </ListItem>
            })}
        </List>
    </div>
}

const Menu = () => {
    const classes = useStyles();
    // const [left , setLeft] = useState(false);
    const [state , setState] = useState({
        left: false,
        menuItems: [],
    });

    const openSide = side => (
        <div
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
          className={clsx(classes.list, {
            [classes.fullList]: 'left',
          })}
        >
          {menuList}
        </div>
      );

    const toggleDrawer = (side , open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setState(left(open));
    }

    return (
        <div>
            <IconButton 
                // className={classes.menuButton} 
                color='inherit' 
                aria-label="Open drawer"
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {openSide('left')}
            </Drawer>
        </div>
    )
}

export default Menu;