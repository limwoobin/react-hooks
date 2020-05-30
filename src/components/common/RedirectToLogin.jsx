import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToLogin = () => {
    return(
        <>
            {
                !window.sessionStorage.getItem('isLogin') && <Redirect to="/login" />
            }
        </>
    )
}

export default RedirectToLogin;
