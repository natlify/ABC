const { contents, computeProductOfSumToTarget } = require('./lib')

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

const part1Soln = () => computeProductOfSumToTarget(contents, 2020)

/**
 *  Problem : To find the 3 numbers that add up to 2020
 *  Algorithm
 *  - define the number as x,y,z ,such that x+y+z=2020
 *  - Assume first number to x & has 2 corresponding (y&z) numbers
 *  - compute the sum of remaining 2 numbers (y+z)
 *  - Run the find complement with 2nd number as y and z as y+z complement
 *  -
 */
const part2Soln = () => {
    for (const x of contents) {
        const yzComp = 2020 - x
        const res = computeProductOfSumToTarget(contents, yzComp)
        if (res !== null) {
            return res * x
        }
    }
}

console.log(part1Soln())
console.log(part2Soln())
