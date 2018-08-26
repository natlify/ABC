// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
//

areSimilar = (a, b) => {
  if (a.length !== b.length) return false;
  let misplaced = 0,
    x = [],
    y = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      x.push(a[i]);
      y.push(b[i]);
      misplaced++;
    }
  }
  return !misplaced || (misplaced === 2 && x[0] === y[1] && x[1] === y[0])
    ? true
    : false;
};
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
