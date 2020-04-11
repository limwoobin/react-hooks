var foo = [1,3,5];


function Func(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

// Func(foo);
Func(...foo)