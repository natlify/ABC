// https://app.codesignal.com/arcade/intro/level-3/3o6QFqgYSontKsyk4/solutions
//

const reverseParentheses = str => {
  const arr = str.split("");
  let i = 0;
  let flag = 0;
  const len = arr.length;
  let start;
  let end;
  while (i < len) {
    const c = arr[i];
    if (c === "(") {
      start = i;
      flag++;
    }
    if (c === ")") {
      end = i;
      break;
    }
    i += 1;
  }
  const value = arr
    .slice(0, start)
    .concat(arr.slice(start + 1, end).reverse(), arr.slice(end + 1))
    .join("");
  console.log(value, start);
  if (!flag) {
    return str;
  }
  return reverseParentheses(value);
};
