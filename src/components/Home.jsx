import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

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
    <Layout>
      <p>안녕하세요 리액트를 위한 웹팩.</p>
      <p>
        <input name="username" onChange={updateField} />
        <Link to="/dynamic">Dynamic Page로 이동</Link>
      </p>
    </Layout>
  );
};
export default Home;
