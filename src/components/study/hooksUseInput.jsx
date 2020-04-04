import React , {useState} from 'react';

const useInput = (initialValue , validator) => {
    const [value , setValue] = useState(initialValue);
    const onChange = event => {
        const val = event.target.value;
        console.log('val' , val);
        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(val);
        }
        if(willUpdate){
            setValue(val);
        }
    }
    return {value , onChange};
}

const hooksUseInput = () => {
    const maxLen = value => value.length <= 10;
    const name = useInput("drogba" , maxLen);
    return (
        <div>
            <h1>Hello</h1>
            {/* {...name} */}
            <input placeholder="Name"  {...name} />
            {/* <input placeholder="Name"  value={name.value} /> */}
        </div>
    )
}

export default hooksUseInput;