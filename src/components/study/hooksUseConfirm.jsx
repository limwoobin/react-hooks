import React , {useState} from 'react';

const useConfirm = (message = "" , onConfirm , onCancel) => {
    if(!onConfirm && typeof onConfirm !== "function"){
        return;
    }
    if(!onCancel && typeof onCancel !== "function"){
        return;
    }
    const confirmAction = () => {
        if(confirm(message)){
            onConfirm();
        }else{
            onCancel();
        }
    };
    return confirmAction;
}

const hooksUseConfirm = () => {
    const [val , setVal] = useState('');
    const [val2 , setVal2] = useState('');

    const onChange = (e) => {
        setVal(e.target.name = e.target.value);
    }

    const deleteWorld = () => console.log('delete the world...');
    const aborted = () => console.log('Aborted');
    const confirmDelete = useConfirm("Are you sure" , deleteWorld , aborted);
    return(
        <div>
            <button onClick={confirmDelete}>Delete the world</button>

            <input type="text" name="val" value={val} onChange={onChange} /> 
            <input type="text" name="val2" value={val2} onChange={onChange}/>
        </div>
    )
}

export default hooksUseConfirm;