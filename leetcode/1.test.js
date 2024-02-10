var twoSum = function (nums, target) {
    const hashMap = {}
    for (index = 0; index <= nums.length; index++) {
        const ele = nums[index]
        if (hashMap[target - ele] !== undefined) {
            return [hashMap[target - ele], index]
        } else {
            hashMap[ele] = index
        }
    }
}

describe('Test i/o', () => {
    it('#1', async () => {
        const result = twoSum([2, 7, 11, 15], 9)
        expect(result).toEqual([0, 1])
    })
})
