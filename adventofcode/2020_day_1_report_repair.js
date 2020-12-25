// https://adventofcode.com/2020/day/1
// All imports
const fs = require('fs')
const path = require('path')

// ------------Prepare Input ------------ //
// Read File
const file = fs.readFileSync(
    path.join(__dirname, 'report_repair_input.txt'),
    'utf-8'
)
// Process input file content into array
let contents = file
    .split('\n')
    .map((ele) => Number(ele))
    .sort((a, b) => Number(a) - Number(b))

/**
 * The Algorithm
 * - take any one extreme number
 * - search for its complement
 * - x' => A complement of x is defined as | 2020 - x|
 * - use binary search for searching
 * - if found -> stop and compute product of x and x' , return product
 * - if not reduce the sample size by removing indices until value is less than the complement
 * - remove x as well (initial number)
 * - continue
 */

// const TARGET = 2020

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
// console.log(binSearch(contents, contents.length - 1, 0, 1769))

const findNumberComplement = (arr, TARGET) => {
    let i = 0,
        j = arr.length - 1

    while (i < j) {
        const x = arr[i]
        const xComp = TARGET - x
        const isFound = binSearch(arr, j, i, xComp)
        if (isFound === true) {
            console.log(x, xComp)
            // console.log(x * xComp)
            return true
        } else {
            i++
            j = isFound
        }
    }
    return false
}

// findNumberComplement(contents, 2020)

module.exports = {
    contents,
    binSearch,
    findNumberComplement,
}
