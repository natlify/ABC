// https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo
//
const groupingDishes = dishes => {
  const ingMap = dishes.reduce(
    (acc, e) =>
      e.reduce((a, ele, index, array) => {
        if (index) {
          if (a.has(ele)) {
            const val = a.get(ele).concat(array[0]);
            a.set(ele, val);
          } else a.set(ele, Array.of(array[0]));
        }
        return a;
      }, acc),
    new Map()
  );
  return Array.from(ingMap.keys())
    .sort((a, b) => a > b)
    .map(item => {
      return [item, ...ingMap.get(item).sort((a, b) => a > b)];
    })
    .filter(item => item.length > 2);
};
