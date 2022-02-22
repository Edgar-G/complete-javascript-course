//Steven wants to tip lol
// 15% if bill = 50:300 else 20%
// then print it


const bill = 430; // 275, 40, 430

const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
