// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
//

const getCount = str =>
  str.split("").reduce((acc, c) => {
    if (/[a-z]/.test(c))
      acc.has(c) ? acc.set(c, acc.get(c) + 1) : acc.set(c, 1);
    return acc;
  }, new Map());

const scramble = (str1, str2) => {
  const c1 = getCount(str1),
    c2 = getCount(str2);
  const l = Array.from(c2.keys());
  for (var i = 0; i < l.length; i++) {
    const x = l[i];
    if (!c1.has(x)) return false;
    if (c1.get(x) < c2.get(x)) return false;
  }
  return true;
};

console.log(scramble("rkqodlw", "world")); // ==> True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // ==> True
console.log(scramble("katas", "steak")); //==> False
