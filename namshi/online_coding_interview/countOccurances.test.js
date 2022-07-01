// Hello World. This is Oregano Pizzerio
// Hell1 W2rld. This Is 3regan4 Pizzeri5

const countAllOccurances = (str, targetChar) => {
    let count = 0
    return str
        .split('')
        .map((char) =>
            char.toUpperCase() === targetChar.toUpperCase() ? ++count : char
        )
        .join('')
}

describe('Test i/o', () => {
    it('it should return valid string as output', async () => {
        const result = countAllOccurances(
            'Hello World. This Is Oregano Pizzerio',
            'o'
        )
        expect(result).toBe('Hell1 W2rld. This Is 3regan4 Pizzeri5')
        const result2 = countAllOccurances(
            'Hello World. This Is Oregano Pizzerio',
            'i'
        )
        expect(result2).toBe('Hello World. Th1s 2s Oregano P3zzer4o')
    })
})
