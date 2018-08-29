// https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM
//

minesweeper = m => {
  mine = Array(m.length)
    .fill(0)
    .map(x => Array(m[0].length).fill(0));
  m.map((e, i) =>
    e.map((l, j) => {
      if (l) {
        if (i - 1 >= 0) {
          mine[i - 1][j]++;
          if (j - 1 >= 0) mine[i - 1][j - 1]++;
          if (j + 1 < m[0].length) mine[i - 1][j + 1]++;
        }
        if (j + 1 < m[0].length) mine[i][j + 1]++;
        if (j - 1 >= 0) mine[i][j - 1]++;
        if (i + 1 < m.length) {
          mine[i + 1][j]++;
          if (j - 1 >= 0) mine[i + 1][j - 1]++;
          if (j + 1 < m[0].length) mine[i + 1][j + 1]++;
        }
      }
    })
  );
  return mine;
};
