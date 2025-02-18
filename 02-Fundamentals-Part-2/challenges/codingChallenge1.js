// Coding Challenge #1
// Each team competes 3 times and calc avg. each team gets 1 avg score
// one team wins only if it has double the avg score than the other team

// 1. create arrow function called 'calcAverage'
// 2. Use that function to calc avg for both teams
// 3. create a func called checkWinner that takes 2 parameters avgDolphins and avgKoalas and then logs to the console with their victory points
// 4. use the 'checkWinner' function to find out the winner for both DATA1 and DATA2
// 5. Ignore draws.

//TEST DATA1: D = 44, 23, 71; K = 65, 54, 49;
//TEST DATA2: D = 85, 54, 41; K = 23, 34, 27;

const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins :(`)
    }
}
// TEST DATA 1
checkWinner(avgDolphins, avgKoalas);

// TEST DATA 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);