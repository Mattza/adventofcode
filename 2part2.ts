// const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
// console.log('input', input)
const fs = require("fs");
const input = fs.readFileSync("input2.txt").toString()
const rounds = input.split("\n");

const isImpossible = ({ red, green, blue }) => red > 12 || green > 13 || blue > 14
const parseSet = str => {
    const parts = str.split(",")
    // console.log('parts', parts);
    const set = { red: 0, green: 0, blue: 0 }
    for (let i = 0; i < parts.length; i++) {
        const [count, type] = parts[i].trim().split(" ");
        set[type] = parseInt(count)
    }
    return set
}

const isRowPossible = row => {
    const [gameId, gamesStr] = row.split(":")
    const games = gamesStr.split(";").map(parseSet)
    const impossible = games.some(isImpossible)
    return !impossible
}
const score = rounds.reduce((acc, row, index) => {
    let roundScore = 0;
    if (isRowPossible(row)) {
        roundScore = index + 1;
    }
    return acc + roundScore
}, 0)
console.log('score', score);