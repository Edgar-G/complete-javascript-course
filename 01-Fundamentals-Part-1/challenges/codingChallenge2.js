//Data1
const markMass = 78; //kilograms
const markHeight = 1.69; //meters
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = Math.round((markMass / (markHeight ** 2)));
// console.log("Mark BMI: " + markBMI);

const johnBMI = Math.round((johnMass / (johnHeight ** 2)));
// console.log("John BMI: " + johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI(${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
};







