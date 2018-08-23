// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Reverse words
//

const reverseWords = str =>
  str
    .split(" ")
    .map(e =>
      e
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");

console.log(reverseWords("I am Successful"));
