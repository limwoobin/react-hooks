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
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const hooksUseTabs = () => {
    const {currentItem , changeItem} = useTabs(0 , content);
    return(
        <div>
            {content.map((section , index) => {
                return <button onClick={() => changeItem(index)}>{section.tab}</button>
            })}
            <div>{currentItem.content}</div>
        </div>
    )
}

export default hooksUseTabs;