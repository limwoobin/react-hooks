import React , {useState , useEffect , useRef} from 'react';

const useInterval = (callback , delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    } , [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }

        if(delay !== null){
            let id = setInterval(tick , delay);
            return () => clearInterval(id);
        }
    } , [delay]);
}

const customhooks = () => {
    const [count , setCount] = useState(0);

    useInterval(() => {
      setCount(count + 1);  
    } , 1000);

    return (
        <div>
            <h1>Here is a counter using the useInterval hook</h1>
            <h3>{count}</h3>
        </div>
    )
}

export default customhooks;