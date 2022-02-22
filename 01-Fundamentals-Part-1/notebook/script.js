/*
let js = 'amazing';
console.log(50 + 50);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName)

// Variable name convention :)
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myCurrentJob);
console.log(myFirstJob);
*/
//CHAPTER 12
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);
console.log(typeof null);
*/
// CH 13
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // Will give error because const doesnt let it change

// const job; // Needs to be initialized

var job = 'programmer';
job = 'teacher';
*/
/*
// BASIC OPERATORS CH14
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2^3 = 2 * 2 * 2

const firstName = 'Edgar';
const lastName = 'Aguilar';
console.log(firstName + ' ' + lastName);
//There is another concat method

// Assignmet Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/
// EP 15 Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
//EP 16
/*
const firstName = 'Edgar';
const job = 'student';
const birthYear = 1998;
const year = 2037;

const edgar = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(edgar);


const edgarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(edgarNew);

console.log(`Just a regular string...`);

console.log('String with \n\
mutiple \n\
lines');

console.log(`String
multiple
lines`);
*/
// EP 18 Decisions
/*
const age = 15;
// const isOldEnough = (age >= 18);

if (age >= 18) {
    console.log(`Sarah can start driving license lol`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
*/
/*
// EP 20 Conversion and Coercion
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Edgar'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old.');
// this workds because type coercion ^^

console.log('I am ' + '23' + ' years old.');
console.log('23' - '10' - 3); // got converted to num
console.log('23' + '10' + 3); // didnt do it here
console.log('23' * '2'); // worked because thats the only way these operators can ever work
*/
// EP21 Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0)); //falsy
console.log(Boolean(undefined)); //falsy
console.log(Boolean('Edgar')); //truthy
console.log(Boolean({})); //truthy
console.log(Boolean('')); //falsy

const money = 100;

if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height = 0;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}
*/

// EP 22

/*
const age = '18';
if (age === 18) {
    console.log(`You just became an adult! (Strict)`);
};

if (age == 18) {
    console.log(`You just became an adult! (Loose)`);
};

const favNum = Number(prompt("What is your favorite number?"));
console.log(favNum);
console.log(typeof favNum);

if (favNum === 23) {
    console.log(`Cool! that's an amazing number!`);
} else if (favNum === 7) {
    console.log(`7 is also a cool number lol`)
}
else if (favNum === 9) {
    console.log(`9 is also a cool number lol`)
} else {
    console.log(`That number is not cool!`)
};

if (favNum !== 23) console.log(`Why not 23?`);
*/

// EP 23 Boolean logic

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasGoodVision || hasDriversLicense);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone else should drive`);
// // }

// const isTired = false; // C

// console.log(hasGoodVision || hasDriversLicense || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }

// EP 25

// const day = prompt('What day?');

// switch (day) {
//     case 'Monday': // day === 'Monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'Tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'Friday':
//         console.log(`Record videos`)
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log(`Enjoy the weekend :D`);
//         break;
//     default:
//         console.log(`Not a valid day!`)
// }

// if (day === 'Monday') {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === 'Tuesday') {
//     console.log(`Prepare theory videos`);
// } else if (day === 'Wednesday' || 'Thursday') {
//     console.log(`Write code examples`);
// } else if (day === 'Friday') {
//     console.log(`Record videos`)
// } else if (day === 'Saturday' || 'Sunday') {
//     console.log(`Enjoy the weekend :D`);

// } else {
//     console.log(`Not a valid day!`)
// }

// EP 28

const age = 23
age >= 18 ? console.log(`Drink wine!`) : console.log(`Drink water!`);

const drink = age >= 18 ? `Wine` : `Water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `Wine`;
} else {
    drink2 = `Water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);
