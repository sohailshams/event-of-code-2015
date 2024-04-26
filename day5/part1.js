import fs from "fs"

const input = fs.readFileSync("./data.txt", "utf8").split('\n')

let total = 0;

input.forEach((string) => {
    let vowels = 0;
    let twice = 0;

    string.split('').forEach((char, ind) => {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels++
        }
        if (ind !== 0) {
            if (char === string[ind - 1]) {
                twice++
            }
        }
    })

    const pattern = /(ab|cd|pq|xy)/

    if (vowels >= 3 && twice > 0 && !pattern.test(string)) {
        total++
    }
})


console.log('total', total)