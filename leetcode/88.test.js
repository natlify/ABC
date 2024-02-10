var merge = function (nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    }
    while (i >= 0) {
        nums1[k--] = nums1[i--]
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
    return nums1
}

describe('Test case ', () => {
    it('#1', async () => {
        const result = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
        expect(result).toEqual([1, 2, 2, 3, 5, 6])
    })
    it('#2', async () => {
        const result = merge([1], 1, [], 0)
        expect(result).toEqual([1])
    })
    it('#3', async () => {
        const result = merge([0], 0, [1], 1)
        expect(result).toEqual([1])
    })
})
