// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

const array_diff = (a, b) => {
  const elem = b.pop();
  if (elem === undefined) return a;
  else {
    const nextA = a.filter(item => item != elem);
    return array_diff(nextA, b);
  }
};
