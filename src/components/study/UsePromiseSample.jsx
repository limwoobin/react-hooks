import React , {useState} from 'react';
import usePromise from './usePromise';

const wait = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Hello hooks!'),3000);
    });
};

const UsePromiseSample = () => {
    const [loading , resolved , error] = usePromise(wait , []);  
    const [count , setCount] = useState(0);
    if(loading) return <div>로딩중..!</div>;
    if(error) return <div>에러 발생!</div>;
    if(!resolved) return null;
    return (
        <div>
            {resolved} <br />
            {count} <br />
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default UsePromiseSample;