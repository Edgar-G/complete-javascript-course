// bodyMassIndex = (mass / (height * height));


//Data1

let markMass = 78; //kilograms
let markHeight = 1.69; //meters
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = (markMass / (markHeight ** 2));
console.log("Mark BMI: " + markBMI);

let johnBMI = (johnMass / (johnHeight ** 2));
console.log("John BMI: " + johnBMI);

if (markBMI > johnBMI) {
    let markHigherBMI = true;
    console.log(markHigherBMI);
};

//Data2

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = (markMass / (markHeight ** 2));
console.log("Mark BMI: " + markBMI);

johnBMI = (johnMass / (johnHeight ** 2));
console.log("John BMI: " + johnBMI);

if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log(markHigherBMI);
}
else (console.log(false));





