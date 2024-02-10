var canConstruct = function (ransomNote, magazine) {
    const magObj = magazine.split('').reduce((obj, ele) => {
        const count = obj[ele]
        obj[ele] = count ? count + 1 : 1
        return obj
    }, {})
    const ransomArr = ransomNote.split('')
    for (i = 0; i < ransomArr.length; i++) {
        const availableCount = magObj[ransomArr[i]]
        if (!availableCount) return false
        magObj[ransomArr[i]] = availableCount - 1
    }
    return true
}

describe('Test i/o', () => {
    it('#1', async () => {
        const result = canConstruct('a', 'b')
        expect(result).toEqual(false)
    })
    it('#2', async () => {
        const result = canConstruct('aa', 'ab')
        expect(result).toEqual(false)
    })
    it('#3', async () => {
        const result = canConstruct('aa', 'aab')
        expect(result).toEqual(true)
    })
})
