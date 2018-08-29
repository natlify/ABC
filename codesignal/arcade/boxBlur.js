// https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP/
//

boxBlur = image => {
  arr = [];
  for (var j = 0; j + 3 <= image.length; j++) {
    row = [];
    for (var i = 0; i + 3 <= image[0].length; i++) {
      tot = 0;
      for (var a = j; a < j + 3; a++) {
        str = "";
        for (var b = i; b < i + 3; b++) {
          str += `${image[a][b]} `;
          tot += image[a][b];
        }
      }
      row.push(Math.floor(tot / 9));
    }
    arr.push(row);
  }
  return arr;
};
