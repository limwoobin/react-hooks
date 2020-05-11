import React , {useState} from 'react';

const content = [
    {
        tab:"Section 1",
        content: "hello Section1"
    },
    {
        tab:"Section 2",
        content: "hello Section2"
    }
];

const useTabs = (initialTab , allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    const [currentIndex , setCurrentIndex] = useState(initialTab);
    console.log('changeItem?' ,  currentIndex);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const useTest = (a , b) => {
    const printA = () => {
        console.log('a');
    }

    const printB = () => {
        console.log('b');
    }

    return {
        test : printA,
        zztest : printB
    }
}

const hooksUseTabs = () => {
    const {currentItem , changeItem} = useTabs(0 , content);
    const [count , setCount] = useState(0);
    const {test , zztest} = useTest(0 , 1);

    return(
        <div>
            {content.map((section , index) => {
                return <button onClick={() => changeItem(index)}>{section.tab}+{index}</button>
            })}
            <div>{currentItem.content}</div>


            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>


            <div>
                <button onClick={test}>AAA</button>
                <button onClick={zztest}>BBB</button>
            </div>
        </div>
    )
}

export default hooksUseTabs;