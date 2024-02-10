var sortedSquares = function (nums) {
    let sqArr = new Array(nums.length),
        index = nums.length - 1,
        i = 0,
        j = nums.length - 1

    while (i <= j) {
        sqArr[index--] = Math.pow(
            nums[Math.abs(nums[i]) < Math.abs(nums[j]) ? j-- : i++],
            2
        )
    }
    return sqArr
}

describe('Test i/o', () => {
    it('#1', async () => {
        const result = sortedSquares([-4, -1, 0, 3, 10])
        expect(result).toEqual([0, 1, 9, 16, 100])
    })
    it('#2', async () => {
        const result = sortedSquares([-7, -3, 2, 3, 11])
        expect(result).toEqual([4, 9, 9, 49, 121])
    })
})
