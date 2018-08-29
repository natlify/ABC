// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg
//

arrayChange = a =>
  a.reduce((acc, e, i) => {
    if (i && a[i - 1] >= e) {
      acc += a[i - 1] - e + 1;
      a[i] = a[i - 1] + 1;
    }
    return acc;
  }, 0);

console.log(arrayChange([1, 1, 1]));
