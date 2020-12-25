// https://adventofcode.com/2020/day/1

const fs = require('fs')
const path = require('path')

// ------------Prepare Input ------------ //

// Read File
const file = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')

// Process input file content into array
let contents = file
    .split('\n')
    .map((ele) => Number(ele))
    .sort((a, b) => Number(a) - Number(b))

// Binary search
// binSearch : arr, start, end, u , l , target
const binSearch = (arr, u, l, target) => {
    let mid
    while (u > l) {
        mid = Math.floor((u + l) / 2)
        if (arr[mid] === target) {
            return true
        }
        if (arr[mid] < target) {
            l = mid + 1
        } else u = mid - 1
    }
    return mid
}

const computeProductOfSumToTarget = (arr, TARGET) => {
    let i = 0,
        j = arr.length - 1

    while (i < j) {
        const x = arr[i]
        const xComp = TARGET - x
        const isFound = binSearch(arr, j, i, xComp)
        if (isFound === true) {
            return x * xComp
        } else {
            i++
            j = isFound
        }
    }
    return null
}

module.exports = {
    contents,
    computeProductOfSumToTarget,
}
