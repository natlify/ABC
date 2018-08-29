// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5
//

avoidObstacles = a => {
  uL = Math.max(...a);
  (step = 2), (i = 1);
  do {
    d = step * i++;
    if (a.indexOf(d) !== -1) {
      step++;
      i = 1;
    }
  } while (d <= uL);
  return step;
};
avoidObstacles([5, 3, 6, 7, 9]);
