// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
//

const diamond = n => {
  if (n < 0 || n % 2 === 0) return null;
  let top = [],
    i = 1,
    diam = [];
  const base = "*".repeat(n) + "\n";
  while (n - 1) {
    top.push(`${" ".repeat(i++)}${"*".repeat(n - 2)}\n`);
    n -= 2;
  }
  const bottom = top;
  top.reverse();
  diam.push(top.join(""), base, bottom.reverse().join(""));
  return diam.join("");
};

console.log(diamond(5));
