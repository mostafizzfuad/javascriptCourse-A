let num = 5

// check a number even or odd ?
if (num % 2 == 0) {
    console.log('even')
} else {
    console.log('odd')
}


// check a number positive or negative ?
if (num > 0) {
    console.log('positive')
} else if (num < 0) {
    console.log('negative')
} else {
    console.log('zero')
}


// program : letter grade
// program : large between three numbers (logical AND)
// program : vowel or consonant (logical OR)


// program : letter grade
let marks = 70

if (marks > 100 || marks < 0) console.log('Invalid Marks')
else if (marks >= 80) console.log('A+')
else if (marks >= 70) console.log('A')
else if (marks >= 60) console.log('A-')
else if (marks >= 50) console.log('B')
else if (marks >= 40) console.log('C')
else if (marks >= 33) console.log('D')
else console.log("F")




// program : find large between three numbers (logical AND)
let num1 = 50
let num2 = 50
let num3 = 50

if (num1 >= num2 && num1 >= num3) console.log("Large = " + num1)
else if (num2 >= num1 && num2 >= num3) console.log("Large = " + num2)
else if (num3 >= num1 && num3 >= num2) console.log("Large = " + num3)


// array solution
let arr = [20, 50, 150]

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
}
console.log(max)



// program : vowel or consonant (logical OR)
let ch = 'A'
ch = ch.toLowerCase();

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log('Vowel')
}
else {
    console.log('Consonant')
}