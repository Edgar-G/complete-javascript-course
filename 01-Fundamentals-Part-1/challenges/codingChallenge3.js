// Data1

// const dPlay1 = 96;
// const dPlay2 = 108;
// const dPlay3 = 89;
// const dolphinsAverage = (dPlay1 + dPlay2 + dPlay3) / 3;
// console.log(`DOLPHINS AVG: ${dolphinsAverage}`);

// const kPlay1 = 88;
// const kPlay2 = 91;
// const kPlay3 = 110;
// const koalasAverage = (kPlay1 + kPlay2 + kPlay3) / 3;
// console.log(`KOALAS AVG: ${koalasAverage}`);

// DataBonus1

// const dPlay1 = 97;
// const dPlay2 = 112;
// const dPlay3 = 101;
// const dolphinsAverage = (dPlay1 + dPlay2 + dPlay3) / 3;
// console.log(`DOLPHINS AVG: ${dolphinsAverage}`);

// const kPlay1 = 109;
// const kPlay2 = 95;
// const kPlay3 = 12;
// const koalasAverage = (kPlay1 + kPlay2 + kPlay3) / 3;
// console.log(`KOALAS AVG: ${koalasAverage}`);

// DataBonus2

const dPlay1 = 97;
const dPlay2 = 112;
const dPlay3 = 101;
const dolphinsAverage = (dPlay1 + dPlay2 + dPlay3) / 3;
console.log(`DOLPHINS AVG: ${dolphinsAverage}`);

const kPlay1 = 109;
const kPlay2 = 95;
const kPlay3 = 106;
const koalasAverage = (kPlay1 + kPlay2 + kPlay3) / 3;
console.log(`KOALAS AVG: ${koalasAverage}`);

// Determine the winner based on average
// if (dolphinsAverage === koalasAverage) {
//     console.log(`It's a tie!`);
// } else if (dolphinsAverage > koalasAverage) {
//     console.log(`Dolphins win with an average of ${dolphinsAverage}`);
// } else {
//     console.log(`Koalas win with an average of ${koalasAverage}`);
// }

// BONUS 1: Min of 100 average score required
// if ((dolphinsAverage >= 100) || (koalasAverage >= 100)) {
//     if (dolphinsAverage === koalasAverage) {
//         console.log(`It's a tie!`);
//     } else if (dolphinsAverage > koalasAverage) {
//         console.log(`Dolphins win with an average of ${dolphinsAverage}`);
//     } else {
//         console.log(`Koalas win with an average of ${koalasAverage}`);
//     }
// } else console.log(`No team wins!`);

// BONUS 2: Min of 100 avg score AND draw
if ((dolphinsAverage >= 100) && (koalasAverage >= 100)) {
    if (dolphinsAverage === koalasAverage) {
        console.log(`It's a tie!`);
    } else if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins win with an average of ${dolphinsAverage}`);
    } else {
        console.log(`Koalas win with an average of ${koalasAverage}`);
    }
} else if (dolphinsAverage >= 100) {
    console.log(`Dolphins win!`);

} else if (koalasAverage >= 100) {
    console.log(`Koalas win!`);
} else {
    console.log(`No team wins!`);
}
