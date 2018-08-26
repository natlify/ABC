// https://www.codewars.com/kata/564057bc348c7200bd0000ff
//

const lookup = [1, 10, 9, 12, 3, 4];
const thirt = n => {
  const next = n
    .toString()
    .split("")
    .reverse()
    .reduce((acc, e, i) => acc + lookup[i % 6] * parseInt(e, 10), 0);
  return next === n ? n : thirt(next);
};
