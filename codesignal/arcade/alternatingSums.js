// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9
//

const alternatingSums = a => {
  let sum1 = 0,
    sum2 = 0;
  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) sum1 += a[i];
    else sum2 += a[i];
  }
  return Array.of(sum1, sum2);
};
