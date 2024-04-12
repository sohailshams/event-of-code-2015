import data from './inputData.json'  assert { type: 'json' };

function findFloor(data) {
    let upFloor = 0;
    let downFloor = 0;

    const FloorsArray = data.data.split('')

    FloorsArray.forEach(floor => floor == "(" ? upFloor++ : downFloor++);
    return upFloor - downFloor
}

console.log(findFloor(data));