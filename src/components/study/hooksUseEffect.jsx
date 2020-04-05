import React, { useEffect, useState } from 'react';

const hooksUseEffect = () => {
    const sayHello = () => console.log('hello');
    const [number , setNumber] = useState(0);
    const [aNumber , setAnumber] = useState(0);
    useEffect(sayHello , [number]);
    // number 가 바뀔때만 useEffect가 실행된다

    // useEffect(sayHello , []); 
    // -> 처음 한번만 실행된다
    return (
        <div>
            <div>Hi</div>
            <button onClick={() => {setNumber(number + 1)}}>{number}</button>
            <button onClick={() => {setAnumber(aNumber + 1)}}>{aNumber}</button>
        </div>
    )
}

export default hooksUseEffect;