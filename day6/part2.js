import fs from "fs"

const input = fs.readFileSync("./data.txt", "utf8").split('\n')

let grid = [];
let result = 0;

for (let i = 0; i < 1000; i++) {
    grid.push(new Array(1000).fill(0));
}

input.forEach(str => {

    const instructionsArray = str.split(' ')

    if (instructionsArray[0] === 'toggle') {
        const from = instructionsArray[1].split(',').map(Number)
        const through = instructionsArray[3].split(',').map(Number)
        let [x1, y1] = from
        let [x2, y2] = through
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                grid[i][j] = grid[i][j] + 2;
            }
        }
    }


    if (instructionsArray[1] === 'off' || instructionsArray[1] === 'on') {
        const from = instructionsArray[2].split(',').map(Number)
        const through = instructionsArray[4].split(',').map(Number)
        let [x1, y1] = from
        let [x2, y2] = through
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                grid[i][j] += instructionsArray[1] === 'on' ? 1 : -1;
                if (grid[i][j] < 0) {
                    grid[i][j] = 0;
                }
            }
        }
    }
})

for (let r = 0; r < 1000; r++) {
    for (let l = 0; l < 1000; l++) {
        result += grid[r][l]
    }
}

console.log(result);
