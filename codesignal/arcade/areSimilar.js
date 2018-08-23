// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP
//

const areSimilar = (a, b) => {
  if (a.length !== b.length) return false;
  let misplaced = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) misplaced++;
  }
  if (misplaced === 2 || misplaced === 0) return true;
  return false;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
