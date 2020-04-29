function A(){

};


A.prototype.sum = function(a , b){
    return a + b;
}

function B() {
    A.call();
}
B.prototype = Object.create(A.prototype);


function C() {
    A.call();
}
C.prototype = Object.create(A.prototype);

C.prototype.minus = function() {

}





console.log(B.prototype === C.prototype);


const a1 = new A();

console.log(a1.sum(3,5));