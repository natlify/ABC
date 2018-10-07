// https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi
//

cellColor = c => {
  row = "12345678".indexOf(c[1]);
  col = "ABCDEFGH".indexOf(c[0]);
  res = !((row * col) % 2) && col % 2 === 0;
  return row % 2 ? !res : res;
};

chessBoardCellColor = (c1, c2) => cellColor(c1) === cellColor(c2);
