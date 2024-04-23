import data from './inputData.json'  assert { type: 'json' };

const directions = data.data.split('')

const directionsObj = {}

let dx = 0
let dy = 0

directionsObj[[dx, dy]] = 1

directions.forEach((ele) => {
    if (ele === "^") {
        dy++
    }
    if (ele === "v") {
        dy--
    }
    if (ele === ">") {
        dx++
    }
    if (ele === "<") {
        dx--
    }

    directionsObj[[dx, dy]] = 1
})
console.log(Object.keys(directionsObj).length)
