import fs from "fs"

const input = fs.readFileSync("./data.txt", "utf8").split("\n")

let total = 0

input.forEach(ele => {
    const dimensions = ele.split('x').map(Number);
    const sortedDimensions = dimensions.sort((a, b) => a - b)
    const [l, w, h] = [...sortedDimensions];
    total += (l + l + w + w) + (l * w * h)
})

console.log(total)