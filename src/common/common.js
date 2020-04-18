import moment from 'moment';

const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const Func = {
    setVerifyEmail : (email) => {
        if(email.match(emailRegExp) == null || email === null || email === ''){
            return false;
        }else{
            return true;
        }
    },
    emptyCheck : (data) => {
        if(!data){
            return false;
        }else{
            return true;
        }
    },
    passwordCheck : (password) => {
        if(!/^[a-zA-Z0-9]{8,12}$/.test(password)){
            return false;
        }else{
            return true
        }
    },
    Compare : (key) => {
        return function (a, b) {
            // 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
            return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
        };
    },
    DateFormat : (date) => {
        return moment(date).format('YYYY/MM/DD HH:mm:ss');
    },
    DateFormat2 : (date) => {
        return moment(date).format('YYYY-MM-DD');
    }
}