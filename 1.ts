// const input = `1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000`
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString()
// const input = await Bun.file("input.txt").text()
const rows = input.split("\n").map(item => item.trim())
console.log('rows', rows);
const arr = rows.reduce((acc, item) => {
    // console.log('item', acc.index, item);
    if (item === "") {
        acc.index++
    } else {
        acc.box[acc.index] = acc.box[acc.index] || 0
        acc.box[acc.index] += parseInt(item);

    }
    return acc
}, { index: 0, box: [] })

console.log(arr.box.sort().slice(-3).reduce((acc, item) => acc + item))
console.log(Math.max(...arr.box))
