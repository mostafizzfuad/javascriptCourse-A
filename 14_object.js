// how to create an object
var student1 = {
    stdName: 'Mostafizur',
    age: 25,
    cgpa: 3.92,
    language: ['c', 'c++', 'java', 'javascript']
}

// how to print the value of an object
console.log(student1.stdName)


// adding a constructor (for templete)
function Student(stdName, age, cgpa, language) {
    this.stdName = stdName
    this.age = age
    this.cgpa = cgpa
    this.language = language

    // adding function inside a constructor
    this.display = function() {
        console.log(this.stdName)
        console.log(this.age)
        console.log(this.cgpa)
        console.log(this.language)
    }
}

var studentOne = new Student("Fuad", 26, 3.51, ['c', 'c++', 'java', 'javascript'])
var studentTwo = new Student("Siam", 22, 3.32, ['flutter', 'c++', 'java', 'python'])
var studentThree = new Student("Junnun", 23, 3.01, ['golang', 'c++', 'java', 'dart'])

console.log(studentOne.age)
console.log(studentTwo.stdName)
console.log(studentThree.language)

console.log('\n')

studentOne.display()
studentTwo.display()
studentThree.display()

// this keyword : method ke je call kore, this keyword take indicate kore [method je call korbe this tar]