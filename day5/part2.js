import fs from "fs"

const input = fs.readFileSync("./data.txt", "utf8").split('\n')
let niceString = 0

input.forEach((line) => {

    let duplicate = false
    let exactlySame = false


    if (/(.).\1/.test(line)) {
        exactlySame = true
    }

    if (/(..).*\1/.test(line)) {
        duplicate = true
    }

    if (duplicate && exactlySame) {
        niceString++
    }
})


console.log(niceString)