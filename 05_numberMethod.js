// ******** convert number to string ******** //

let digit = 125
console.log(typeof digit) // number

digit = toString(digit) // convert number to string
console.log(typeof digit) // string


// ******** convert string to number ******** //
let firstId = "250"

console.log(typeof firstId) // string
firstId = parseInt(firstId) // convert string to number(integer)
console.log(typeof firstId) // number

let floatNumber = "25.2" // string
floatNumber = parseFloat(floatNumber) // convert string to number(float)
console.log(typeof floatNumber) // number


let number = 32.36548
console.log(number.toFixed(2)) // 32.37
console.log(typeof number.toFixed(2)) // string
// toFixed()    - point er por koto ghor show korbe with round. string return kore

console.log(number.toPrecision(4))
// toPrcision() - total koto ghor show korbe with round. string return kore

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