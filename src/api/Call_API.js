import axios from 'axios';

const myServer = 'http://localhost:4000'

const url = {
    GET_Customers   : myServer + '/dr/customer/customers',
    ADD_Customer    : myServer + '/dr/customer/insert',
    ADD_Member      : myServer + '/dr/member/insert',
    LOGIN           : myServer + '/dr/member/login',
    LOGOUT          : myServer + '/dr/member/logout',
    USER_EMAIL_CHK  : myServer + '/dr/member/overlap/check/',
    GET_Categories  : myServer + '/dr/category/list',
    GET_MainPage    : myServer,
    GET_BoardList   : myServer + '/dr/board/list',
    GET_BoardData   : myServer + '/dr/board/view/',
    BoardInsert     : myServer + '/dr/board/write',
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
}