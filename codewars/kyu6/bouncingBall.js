// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
//

const bouncingBall = (h, bounce, window) => {
  // Float parameter "h" in meters must be greater than 0
  // Float parameter "bounce" must be greater than 0 and less than 1
  // Float parameter "window" must be less than h.
  if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
    let n = 0;
    while (h > window) {
      n++;
      h = h * bounce;
      if (h < window) break;
      n++;
    }
    return n;
  }
  return -1;
};
