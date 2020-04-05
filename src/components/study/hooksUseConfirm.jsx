import React from 'react';

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
    const deleteWorld = () => console.log('delete the world...');
    const aborted = () => console.log('Aborted');
    const confirmDelete = useConfirm("Are you sure" , deleteWorld , aborted);
    return(
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default hooksUseConfirm;