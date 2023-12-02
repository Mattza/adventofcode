// const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
const fs = require("fs");
const input = fs.readFileSync("input2.txt").toString()
const rounds = input.split("\n");

const parseSet = str => {
    const parts = str.split(",")
    const set = { red: 0, green: 0, blue: 0 }
    for (let i = 0; i < parts.length; i++) {
        const [count, type] = parts[i].trim().split(" ");
        set[type] = parseInt(count)
    }
    return set
}

const getFewestCube = row => {
    const [gameId, gamesStr] = row.split(":")
    const games = gamesStr.split(";").map(parseSet)
    return games.reduce((acc, game) => {
        acc.red = Math.max(acc.red, game.red)
        acc.green = Math.max(acc.green, game.green)
        acc.blue = Math.max(acc.blue, game.blue)
        return acc
    }, {
        red: 0,
        green: 0,
        blue: 0
    })
}

const score = rounds.reduce((acc, round) => {
    const { green, red, blue } = getFewestCube(round)
    const roundScore = green * red * blue
    console.log('roundScore', roundScore);
    return acc + roundScore

}, 0)
console.log('scorae', score);