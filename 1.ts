
// const input = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`
const fs = require("fs");
const input = fs.readFileSync("input1.txt").toString()

const rows = input.split("\n");

const convertToNumber = text => {
    return text.replace("one", "1")
        .replace("two", "2")
        .replace("three", "3")
        .replace("four", "4")
        .replace("five", "5")
        .replace("six", "6")
        .replace("seven", "7")
        .replace("eight", "8")
        .replace("nine", "9")

}
const result = rows.reduce((acc, row) => {
    const regex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;
    const matchAll = [...row.matchAll(regex)].map(item => item[1])
    const first = convertToNumber(matchAll[0])
    const last = convertToNumber(matchAll.slice(-1)[0])
    return acc + parseInt(first + last, 10)
}, 0)
console.log('result', result);
