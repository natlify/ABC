// https://app.codesignal.com/challenge/W3iEJPAy39CsM2B6g
//

let comeOnDown = (m, b) => {
  b = b.filter(e => e < m).sort((a, b) => a - b);
  let l = b.length - 1,
    v = 1,
    D = -1,
    i = 0;
  while (i < l) {
    let d = b[i + 1] - b[i];
    if (d > D) {
      D = d;
      v = b[i] + 1;
    }
    i++;
  }
  return m - b[l] >= D ? b[l] + 1 : b[0] > D ? 1 : v;
};
