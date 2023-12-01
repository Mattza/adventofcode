const input = `A Y
B X
C Z`
console.log('input')
// const fs = require("fs");
const rounds = input.split("\n");
const isWinner = (opp: String) => {
    console.log(opp.charCodeAt(0), opp.charCodeAt(2) - 23)
}
rounds.map(isWinner)
