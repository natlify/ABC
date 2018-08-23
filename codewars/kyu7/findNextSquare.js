// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// Find the next perfect square!
//

const findNextSquare = sq => {
  const sqrt = Math.sqrt(sq);
  return Number.isInteger(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1;
};
