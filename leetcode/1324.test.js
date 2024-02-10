var numberOfSteps = function (num) {
    if (num) return 1 + numberOfSteps(num % 2 ? num - 1 : num / 2)
    return 0
}

describe('Test i/o', () => {
    it('#1', async () => {
        const result = numberOfSteps(14)
        expect(result).toEqual(6)
    })
    it('#2', async () => {
        const result = numberOfSteps(8)
        expect(result).toEqual(4)
    })
    it('#3', async () => {
        const result = numberOfSteps(123)
        expect(result).toEqual(12)
    })
})
