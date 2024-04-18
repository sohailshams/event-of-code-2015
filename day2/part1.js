import fs from "fs"

const input = fs.readFileSync("./data.txt", "utf8").split('\n')

let total = 0

input.forEach(ele => {
    const dimensions = ele.split('x');
    const [l, w, h] = [...dimensions];
    total += (2 * l * w) + (2 * w * h) + (2 * h * l) + Math.min(l * w, w * h, h * l)
})

console.log(total)