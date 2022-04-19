// This approach assumes the both the strings are either fully lower case or fully uppercase

// str1 is String
// str2 is String

// Returns an array of chars
const uniqueChars = (str1, str2) => {
    let firstWord
    let secondWord

    // find the smaller for better performance

    if (str1.length <= str2.length) {
        firstWord = str1
        secondWord = str2
    } else {
        firstWord = str2
        secondWord = str1
    }

    // get char map to identify which string is coming from where
    let allCharsOfWord1 = getCharMap(firstWord)
    let allCharsOfWord2 = getCharMap(secondWord)

    allUniqueCharsOfWord1 = Object.keys(allCharsOfWord1)

    allUniqueCharsOfWord1.map((char) => {
        // Check if there is a match...
        if (allCharsOfWord2[char]) {
            // if so remove from both objs
            delete allCharsOfWord1[char]
            delete allCharsOfWord2[char]
        }
    })

    // combine
    const uniqueCharactersMap = { ...allCharsOfWord1, ...allCharsOfWord2 }

    const uniqueCharactersArr = Object.keys(uniqueCharactersMap)

    return uniqueCharactersArr
}

// to clean string and get array
const getChars = (str) => {
    return str.replace(/\s/g, '').split('')
}

// returns a map of chars and count
const getCharMap = (str) => {
    const charArr = getChars(str)
    return charArr.reduce((charObj, ele) => {
        if (!charObj[ele]) {
            charObj[ele] = 1
        } else charObj[ele] = charObj[ele] + 1
        return charObj
    }, {})
}

console.log(uniqueChars('ARJITH', 'NATARAJAN'))
console.log(uniqueChars('LOS ANGELESO', 'LAS VEGASV'))
