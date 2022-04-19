// This solution assumes that the array has unique integers
// this approach works without sorting

const findAllPairs = (arr, X) => {
    const allUniqueNumbersObj = getNumberMap(arr)
    const result = []
    arr.map((num) => {
        if (allUniqueNumbersObj[X - num]) {
            // console.log([num, X - num])
            result.push([num, X - num])
            //once match is found, remove the nums to avoid duplicate
            delete allUniqueNumbersObj[X - num]
            delete allUniqueNumbersObj[num]
        }
    })
    return result
}

// borrowing the method we deifned for earlier problem
const getNumberMap = (numArr) => {
    return numArr.reduce((charObj, ele) => {
        if (!charObj[ele]) {
            charObj[ele] = 1
        } else charObj[ele] = charObj[ele] + 1
        return charObj
    }, {})
}

// Input section
const inputArr1 = [
    29, 295, 103, -15, 100, -23, -19, 67, 30, 44, 87, -55, 16, -250,
]

const sum = 45

console.log(findAllPairs(inputArr1, sum))
