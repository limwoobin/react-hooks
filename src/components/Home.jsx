import React , {useState} from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [data , setData] = useState({
    count: 0,
    title: ''
  });
  
  const updateField = (e) => {
    console.log([e.target.name]);
    console.log(e.target.value);
  }

  return (
    <div>
      <p>안녕하세요 리액트를 위한 웹팩.</p>
      <p>
        <input name="username" onChange={updateField} />
        <Link to="/dynamic">Dynamic Page로 이동</Link>
      </p>
    </div>
  );
};
export default Home;
