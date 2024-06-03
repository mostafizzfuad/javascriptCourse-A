/********************
 * 
 * array is an object
 * array is a collection of variables
 * 
 ********************/

// array literal syntax
let friends = ['Mostafizur', 'Junnun', 'Siam', 'Masud'] 
console.log(friends)


// array function
let years = new Array(1990, 1993, 2001, 2002, 2003) // array function syntax
console.log(years)

// array muted / re-assigned elements
years[1] = 1998
console.log(years[1])

// array length
console.log(friends.length)
console.log(years.length)

// type of array
console.log(typeof years) // object

// finding elements in array by index
console.log(years[2])
console.log(years[5]) // undefined : because 5 no index e kono value nei

// find last element in array
console.log(years[years.length - 1]) 



// array push - add element in the end
// array unshift - add element at the beginning
// array pop - remove element from the end
// array shift - remove element from the beginning


// array concat
let country1 = ['Bangladesh', 'India']
let country2 = ['USA', 'Canada']

let country = country1.concat(country2)
console.log(country)


// array traversal
let legend = ['Fuad', 'Siam', 'Bappy', 'Masud']

for (let i = 0; i < legend.length; i++) {
    console.log(legend[i])
}


// sum of array elements
let numbers = [10, 12, 25, 8, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)



/********** splice() method ************
 * method adds and/or removes array elements
 * overwrites the original array
 ***************************************/
// array.splice(index, howMany, item1, ....., itemX)

// index :
//      - Required.
//      - The position to add / remove items.
//      - Negative value defines the position from the end of the array.

// howMany : 
//      - Optional
//      - Number of items to be removed.

// item1, ....., itemX :
//      - Optional
//      - New elements(s) to be added.


let legends = ['Siam', 'Fuad', 'Junnun', 'Masud']

legends.splice(2, 0, 'Eishita', 'Habiba') // At position 2, add 2 elements
console.log(legends) // [ 'Siam', 'Fuad', 'Eishita', 'Habiba', 'Junnun', 'Masud' ]

legends.splice(2, 2) // At position 2, remove 2 items
console.log(legends) // [ 'Siam', 'Fuad', 'Junnun', 'Masud' ]

legends.splice(2, 1, 'Emu', 'Choton') // At position 2, add new items, and remove 1 item
console.log(legends) // [ 'Siam', 'Fuad', 'Emu', 'Choton', 'Masud' ]




/********** slice() method ************
 * returns selected elements in an array, as a new array
 * selects from a given start, up to a (not inclusive) given end
 * does not change the original array
 ***************************************/
// array.slice(start, end)

// start :
//      - Optional.
//      - Start position. Default is 0.
//      - Negative numbers select from the end of the array.

// end : 
//      - Optional
//      - End position. ( কতো নাম্বার index এর আগ পর্যন্ত ) Default is last element.
//      - Negative numbers select from the end of the array.

var players = ['Tamim', 'Warner', 'Rohit', 'Virat', 'Dhoni', 'Rashid']
var indianPlayers = players.slice(2, 5) // ( 2 থেকে 5 নাম্বার index এর আগ পর্যন্ত slice)
console.log(indianPlayers)



// sort() , reverse()
var players = ['Tamim', 'Warner', 'Rohit', 'Virat', 'Dhoni', 'Rashid']
console.log(players.sort())
console.log(players.reverse())


// Numeric Sort
var runs = [10, 8, 15, 30, 5, 28]
console.log(runs)
console.log(runs.sort()) // [ 10, 15, 28, 30, 5, 8 ] this is wrong, because this works well for strings. However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

runs.sort(function (a, b) {
    return a - b // + result = argument duita swap korbe. 
})
console.log(runs)

// sort an array descending
var runs = [10, 8, 15, 30, 5, 28]
runs.sort(function (a, b) {
    return b - a // + result = argument duita swap korbe. 
})
console.log(runs)


// task : (1D array)
/********** create a function called highestScore that will -
 * receive a 1D array called scores
 * return the highest score
 ***************************************/

function highestScore(scores) {
    let mx = scores[0]
    for (let i = 1; i < scores.length; i++) {
        if (mx < scores[i]) {
            mx = scores[i]
        }
    } 
    return mx
}

let scores = [21, 28, 1, 88, 15]
let maxScore = highestScore(scores)
console.log(maxScore)






// task : (2D array)
/********** create a function called highestRunScore that will -
 * receive a 2D array called playersInfo
 * based on highest score, return the name of the player
 ***************************************/

function highestRunScore(playersInfo) {
    let highestScorer = playersInfo[0][0]
    let highestScore = playersInfo[0][1]

    for (let i = 1; i < playersInfo.length; i++) {
        if (highestScore < playersInfo[i][1]) {
            highestScore = playersInfo[i][1]
            highestScorer = playersInfo[i][0]
        }
    }
    return highestScorer
}

let playersInfo = [
    ['Rohit', 26],
    ['Virat', 102],
    ['Jadeja', 21],
    ['Dhoni', 35]
]

nameOfHighestScorer = highestRunScore(playersInfo) // function invoke
console.log(nameOfHighestScorer)