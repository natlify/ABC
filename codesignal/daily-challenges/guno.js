// https://app.codesignal.com/challenge/6ntswrdEG2Bb3k9re
//

c = {
  c: 0,
  s1: 20,
  s2: 20,
  s3: 20,
  s4: 50,
  s5: 50
};
D = 1;
i = 0;
guno = (p, m) => {
  P = new Array(p).fill(0);
  m.forEach(e => {
    s = d = 1;
    if (i < 0) i += p;
    if (p <= i) i -= p;
    if (e == "s1") s = 2;
    if (e == "s3") d = -1;
    P[i] += c[e];
    D *= d;
    i += D * s;
  });
  return P;
};

// const p = 4;
// const m = ["c", "s3", "s1", "s4"];
// console.log(guno(p, m));
