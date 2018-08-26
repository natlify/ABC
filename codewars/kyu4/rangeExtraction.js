// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
//

const solution = list => {
  let i = 0,
    temp = [],
    arr = [];
  while (i < list.length) {
    if (list[i] + 1 === list[i + 1]) temp.push(list[i], list[i + 1]);
    else {
      if (temp.length === 0) arr.push(list[i]);
      else if (temp.length < 3) arr.push(temp[0], temp[1]);
      else arr.push(`${temp[0]}-${temp[temp.length - 1]}`);
      temp.length = 0;
    }
    i++;
  }
  return arr.join(",");
};
