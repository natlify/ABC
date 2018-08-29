// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico
//

getCount = str =>
  str.split("").reduce((acc, c) => {
    if (/[a-z]/.test(c))
      acc.has(c) ? acc.set(c, acc.get(c) + 1) : acc.set(c, 1);
    return acc;
  }, new Map());

palindromeRearranging = inputString => {
  const k1 = getCount(inputString);
  const oddCount = Array.from(k1.keys()).reduce(
    (p, c) => (k1.get(c) % 2 ? p + 1 : p),
    0
  );
  return inputString.length % 2
    ? oddCount === 1
      ? true
      : false
    : oddCount === 0
      ? true
      : false;
};
