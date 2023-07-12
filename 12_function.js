// square
function square(n) {
    return n * n;
}
console.log(square(5))
console.log(square(7))


// add
function add(m, n) { // parameter
    return m + n
}
console.log(add(10, 15)) // function invoke & arguments passing




/****** IIFEs (immediately invokeable function expression) ******/ 
/******* it's run in console *******
 
(function display() {
    console.log('Hello World !!')
})();

************************************/



/******* function expression *******/ 
// function er name ke variable baniye dilei function expression hoye jabe.
const sub = function (m, n) {
    return m - n
}
console.log(sub(20, 12))