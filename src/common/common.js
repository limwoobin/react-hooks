const arr = [1,3,5,7,9];

arr.reduce((previousValue , currentValue , currentIndex) => {
    console.log('-----------------------');
    console.log(previousValue);
    console.log(currentValue);
    console.log(currentIndex);
    return currentValue;
});
