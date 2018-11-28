// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq
//
const absoluteValuesSumMinimization = a => {
  mid = Math.floor((a.length - 1) / 2);
  if (a.length % 2) return a[mid];
  else {
    if (val(a, a[mid - 1]) < val(a, a[mid + 1])) return a[mid - 1];
    else if (val(a, a[mid - 1]) > val(a, a[mid + 1])) return a[mid + 1];
    else return Math.min(a[mid - 1], a[mid + 1]);
  }
};

val = (a, ele) => a.reduce((acc, e) => (acc += Math.abs(e - ele)), 0);

console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(val([2, 4, 7], 2));
