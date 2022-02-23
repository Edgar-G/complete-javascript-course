'use strict';
// Can only be used for a specific mode and funciton. ALways put strict mode in the beginning of a script and like that write mode secure code. Strict mode allows to avoid accidental errors. strict shows visible errors in some situations.

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 345;

// CH33 Functions

// function logger() {
//     console.log(`My name is Edgar`);
// }

// // running / invoking / calling the funciton
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(6, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(6, 0));

// const appleOrangeJuice = fruitProcessor(4, 4);
// console.log(appleOrangeJuice);

// Keep your code DRY (Dont repeat yourself) this is why functions are super useful.

// CH34 Function Declarations vs. Expressions
/*
// Function Declaration
// We can call declarations before. This happens because of a process called Hoisting.
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1998);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1998);
console.log(age1, age2);
*/

// Lecture 35 Arrow Functions
/*
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge2(1998), calcAge3(1998));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1998, 'Edgar'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

// Lecture 36 Nested Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const x = fruitProcessor(4, 4);
console.log(x);
*/

// Lecture 37 Fundamental Principles of Functions

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years!`;
        return retirement;
    } else {
        console.log(`${firstName} has already retired! :)`)
        return -1;
    }

}

console.log(yearsUntilRetirement(1998, 'Edgar'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// REVIEW

//FUNCTION DECLARATION
function calcAge(birthYear) {
    return 2037 - birthYear;
}

//FUNCTION EXPRESSION
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

//ARROW FUNCTION
const calcAge = birthYear => 2037 - birthYear;
*/
