var duplicateZeros = function (arr) {
    return arr.reduce((acc, ele) => {
        if (acc.length !== arr.length) {
            acc.push(ele)
            if (!ele) acc.push(ele)
        }
        return acc
    }, [])
}

describe('Test case', () => {
    it('#1', () => {
        const input = [1, 0, 2, 3, 0, 4, 5, 0]
        const result = duplicateZeros(input)
        expect(result).toEqual([1, 0, 0, 2, 3, 0, 0, 4])
    })
    it('#2', () => {
        const input = [1, 2, 3]
        const result = duplicateZeros(input)
        expect(result).toEqual([1, 2, 3])
    })
})
