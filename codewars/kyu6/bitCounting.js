// https://www.codewars.com/kata/bit-counting/train/javascript
//

countBits = n => {
  count = 0;
  while (n) {
    if (n % 2) count++;
    n = Math.floor(n / 2);
  }
  return count;
};
