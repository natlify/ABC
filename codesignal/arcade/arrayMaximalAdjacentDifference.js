// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE
//
arrayMaximalAdjacentDifference = a =>
  a.reduce(
    (max, e, i) =>
      max < Math.abs(e - a[i - 1]) ? Math.abs(a[i] - a[i - 1]) : max,
    -Infinity
  );
