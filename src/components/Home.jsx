import React , {useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data , setData] = useState({
    count: 0,
  });
  const [text , setText] = useState('');
  
  const updateField = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setText(e.target.value);
    console.log(nextState[e.target.name]);
  }

  return (
    <div>
      <p>안녕하세요 리액트를 위한 웹팩.</p>
      <p>
        <input name="username" />
        <input name="text" value={text} onChange={updateField} />
        <Link to="/hooks">Hooks Input로 이동</Link>
      </p>
    </div>
  );
};
export default Home;
