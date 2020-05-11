import React , {useState} from 'react';


const useInputs = () => {
    
    const [text , setText] = useState('');

    const clean = () => {
        console.log('clean');
        setText('');
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return(
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={clean}>초기화</button>
            <div>
                <b>val: {text}</b>
            </div>
        </div>
    )
}

export default useInputs;