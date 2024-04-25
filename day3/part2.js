import data from './inputData.json'  assert { type: 'json' };

const directions = data.data.split('')

const directionsObj = {}

let sDx = 0
let sDy = 0
let rDx = 0
let rDy = 0


directionsObj[[sDx, sDy]] = 1
directionsObj[[rDx, rDy]] = 1

directions.forEach((ele, ind) => {
    if (ind % 2 === 0) {
        if (ele === "^") {
            sDy++
        }
        if (ele === "v") {
            sDy--
        }
        if (ele === ">") {
            sDx++
        }
        if (ele === "<") {
            sDx--
        }
        directionsObj[[sDx, sDy]] = 1

    } else {
        if (ele === "^") {
            rDy++
        }
        if (ele === "v") {
            rDy--
        }
        if (ele === ">") {
            rDx++
        }
        if (ele === "<") {
            rDx--
        }
        directionsObj[[rDx, rDy]] = 1
    }

})
console.log(Object.keys(directionsObj).length)
