// https://www.codewars.com/kata/total-pressure-calculation/train/javascript
//

solution = (m1, m2, M1, M2, V, t) =>
  ((M1 / m1 + M2 / m2) * 0.082 * (t + 273.15)) / V;

console.log(solution(44, 30, 3, 2, 5, 50));
