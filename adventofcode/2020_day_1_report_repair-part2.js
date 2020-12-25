const { contents, findNumberComplement } = require('./2020_day_1_report_repair')

/**
 *  Problem : To find the 3 numbers that add up to 2020
 *  Algorithm
 *  - define the number as x,y,z ,such that x+y+z=2020
 *  - Assume first number to x & has 2 corresponding (y&z) numbers
 *  - compute the sum of remaining 2 numbers (y+z)
 *  - Run the find complement with 2nd number as y and z as y+z complement
 *  -
 */

let i = 0,
    j = contents.length - 1

contents.forEach((x, index) => {
    const yzComp = 2020 - x
    // for (let i = index + 1; index < contents.length; index++) {
    const isFound = findNumberComplement(contents, yzComp)
    if (isFound === true) {
        console.log(x)
    }
    // }
})
