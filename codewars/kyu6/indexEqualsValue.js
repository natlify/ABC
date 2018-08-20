// https://www.codewars.com/kata/element-equals-its-index/train/javascript
//
const indexEqualsValue = a => {
  let i = 0,
    j = a.length - 1,
    fallback;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (a[mid] === mid) fallback = mid;
    a[mid] >= mid ? (j = mid - 1) : (i = mid + 1);
  }
  return fallback !== undefined ? fallback : -1;
};

// const answer = indexEqualsValue([-10, -1, 0, 3, 10, 11, 30, 50, 100]);
// const answer = indexEqualsValue([-3, 0, 1, 3, 10]);
// const answer = indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]);
// const answer = indexEqualsValue([0]);
// console.log(answer);
