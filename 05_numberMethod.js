// ******** convert number to string ******** //

var digit = 125
console.log(typeof(digit))

digit = toString(digit) // convert number to string
console.log(typeof(digit))


// ******** convert string to number ******** //
var firstId = "250"
console.log(typeof(firstId))
firstId = parseInt(firstId) // convert string to number(integer)
console.log(typeof(firstId))

var floatNumber = "25.2"
floatNumber = parseFloat(floatNumber) // convert string to number(float)
console.log(typeof(floatNumber))


var number = 32.36548
console.log(number.toFixed(2))
// toFixed()    - point er por koto ghor show korbe with round. string return kore

console.log(number.toPrecision(4))
// toPrcision() - length of full number. string return kore

console.log(typeof(Number("152")))
console.log(Number(true))
console.log(Number(false))


/*****************
 * toString()
 * parseInt()
 * parseFloat()
 * toFixed()
 * toPrecision()
 * Number()
 ****************/