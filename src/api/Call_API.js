import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 2500,
    header: {
        Authorization: 'bearer accessKey',
        'Content-Type': 'application/json'
    }
});


// const myServer = 'http://localhost:4000'

const url = {
    GET_Customers   : '/dr/customer/customers',
    ADD_Customer    : '/dr/customer/insert',
    ADD_Member      : '/dr/member/insert',
    LOGIN           : '/dr/member/login',
    LOGOUT          : '/dr/member/logout',
    USER_EMAIL_CHK  : '/dr/member/overlap/check/',
    GET_Categories  : '/dr/category/list',
    GET_MainPage    : '/',
    GET_BoardList   : '/dr/board/list',
    GET_BoardData   : '/dr/board/view/',
    BoardInsert     : '/dr/board/write',
    CommentInsert   : '/dr/comment/write',
    GET_Comments    : '/dr/comment/list/',
    FindforPassword : '/dr/mail/password/find/',
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const API = {
    GET_Customers       : () => axios.get(url.GET_Customers , config),
    ADD_Customer        : (data) => axios.post(url.ADD_Customer),
    ADD_Member          : (data) => axios.post(url.ADD_Member , data , config),
    LOGIN               : (data) => axios.post(url.LOGIN , data , config),
    LOGOUT              : () => axios.get(url.LOGOUT , config),
    USER_EMAIL_CHK      : (data) => axios.get(url.USER_EMAIL_CHK + data),
    GET_Categories      : () => axios.get(url.GET_Categories),
    GET_MainPage        : () => axios.get(url.GET_MainPage , '' , config),
    GET_BoardList       : () => axios.get(url.GET_BoardList, config),
    GET_BoardData       : (data) => axios.get(url.GET_BoardData + data , config),
    BoardInsert         : (data) => axios.post(url.BoardInsert , data , config),
    CommentInsert       : (data) => axios.post(url.CommentInsert , data , config),
    GET_Comments        : (data) => axios.get(url.GET_Comments + data , config),
    FindforPassword     : (data) => axios.get(url.FindforPassword + data , config),
}