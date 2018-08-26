// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
//

const kebabize = str =>
  str
    .split("")
    .filter(c => /\D/.test(c))
    .reduce((p, c, i) => {
      if (/[A-Z]/.test(c) && i) p.push("-", c.toLowerCase());
      else p.push(c.toLowerCase());
      return p;
    }, [])
    .join("");

console.log(kebabize("camelCaseHumps"));
