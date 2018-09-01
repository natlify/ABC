// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
//

snail = (a, arr = []) => {
  if (a.length === 0) return arr;
  top = a.splice(0, 1)[0];
  arr = arr.concat(top);
  if (a.length === 0) return arr;
  bottom = a.splice(-1, 1)[0].reverse();
  right = a.map(item => item.splice(-1, 1)[0]);
  left = a.map((item, i, a) => item.splice(0, 1)[0]).reverse();
  arr = arr.concat(right, bottom, left);
  return snail(a, arr);
};

// [1,2,3,4,5,6,7,8,9]
