import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const renderAvatar = (imgPath) => {
    return imgPath === undefined
        ? <Avatar src="/broken-image.jpg" />
        : <Avatar src={imgPath} />
}; 

const UserAvatar = (props) => {
    const imgPath = props.imgPath;

    return (
        <>
            {renderAvatar(imgPath)}
        </>
    )
}

export default UserAvatar;