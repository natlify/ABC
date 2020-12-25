// https://adventofcode.com/2020/day/1

const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(
    path.join(__dirname, 'report_repair_input.txt'),
    'utf-8'
)
let contents = file
    .split('\n')
    .map((ele) => Number(ele))
    .sort((a, b) => Number(a) - Number(b))

const TARGET = 2020

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

let i = 0,
    j = contents.length - 1

while (i < j) {
    const x = contents[i]
    const xComp = 2020 - x
    const isFound = binSearch(contents, j, i, xComp)
    if (isFound === true) {
        console.log(x, xComp)
        console.log(x * xComp)
        break
    } else {
        i++
        j = isFound
    }
}
