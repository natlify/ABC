/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxConsOnes = 0,
        currSum = 0
    nums.forEach((ele) => {
        currSum = ele ? currSum + ele : 0
        maxConsOnes = Math.max(currSum, maxConsOnes)
    })
    return maxConsOnes
}

describe('Test i/o', () => {
    it('#1', async () => {
        const result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])
        expect(result).toEqual(3)
    })
    it('#2', async () => {
        const result = findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])
        expect(result).toEqual(2)
    })
    it('#3', async () => {
        const result = findMaxConsecutiveOnes([0, 0, 0, 0])
        expect(result).toEqual(0)
    })
    it('#4', async () => {
        const result = findMaxConsecutiveOnes([
            1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        ])
        expect(result).toEqual(5)
    })
})
