import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToMain = () => {
    return(
        <>
            {
                window.sessionStorage.getItem('isLogin') && <Redirect to="/" />
            }
        </>
    )
}

export default RedirectToMain;
