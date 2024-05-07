import data from './inputData.json'  assert { type: 'json' };

function findFloor(data) {
    let initialFloor = 0;
    let position;

    const FloorsArray = data.data.split('')

    FloorsArray.forEach((floor, ind) => {
        if (initialFloor !== -1) {
            console.log('floor', floor, ind)
            floor == "(" ? initialFloor++ : initialFloor--
            position = ind
            return
        }
    });
    return position + 1
}

console.log(findFloor(data));
