import React , {useState , useEffect} from 'react';

const test = () => {
    const [count , setCount] = useState(0);
    useEffect(() => {
        console.log('count' , count);
        return () => {
            console.log('clean');
            console.log(count);
        }
    },[])
    return (
        <div>
            현재 카운터의 값은 {count} 입니다. <br/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default test;