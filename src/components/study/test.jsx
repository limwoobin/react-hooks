import React , {useState} from 'react';

const test = () => {
  const [nameState, setNameState] = useState({
    name : '',
    age : 0
  });

  const onClick = (num) => {
    console.log('num' , num);
    console.log('age' , nameState.age);
    setNameState({
      ...nameState ,  age : nameState.age + num
    })
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setNameState({
      ...nameState , name : e.target.value
    });
  }


    return (
      <div className="Person">
      <p>
        <b>name</b> : {nameState.name}, <b>age</b> : {nameState.age}
      </p>
      <p>
        name : 
          <input type="text" placeholder="name" value={nameState.name} onChange={onChange}/>
      </p>
      <p>
        age : 
        <button onClick={() => onClick(1)}>+</button>
        <button onClick={() => onClick(-1)}>-</button>
      </p>
    </div>
    )
}

export default test;