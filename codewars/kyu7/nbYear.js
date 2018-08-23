// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
//  Growth of a Population
//

const nbYear = (p0, percent, aug, p) => {
  let n = 0,
    curr = p0;
  while (curr < p) {
    n++;
    curr += curr * (percent / 100) + aug;
  }
  return n;
};
