import React , {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [count , setCount] = useState(0);
  const [text , setText] = useState('');
  
  const updateField = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setText(e.target.value);
    console.log(nextState[e.target.name]);
  }

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  }

  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <p>안녕하세요 리액트를 위한 웹팩.</p>
        <input name="username" />
        <input name="text" value={text} onChange={updateField} />
        <Link to="/hooks">Hooks Input로 이동</Link>
          <h1>{count}</h1>
        <button onClick={() => onIncrease}>+</button>
        <button onClick={() => onDecrease}>-</button>
    </div>
  );
};
export default Home;
