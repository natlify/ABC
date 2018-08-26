// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

const getCount = str =>
  str.split("").reduce((acc, c) => {
    if (/[a-z]/.test(c))
      acc.has(c) ? acc.set(c, acc.get(c) + 1) : acc.set(c, 1);
    return acc;
  }, new Map());

const mix = (s1, s2) => {
  const c1 = getCount(s1);
  const c2 = getCount(s2);
  const list = [];
  Array.from(c1.keys()).forEach(char => {
    const a = c1.get(char),
      b = c2.get(char) ? c2.get(char) : 0;
    let origin,
      len = a;
    if (b > 1 || a > 1) {
      if (a === b) origin = "=";
      else if (a > b) {
        origin = "1";
        len = a;
      } else {
        origin = "2";
        len = b;
      }
      list.push({
        origin,
        len,
        char
      });
    }
    c2.delete(char);
  });
  Array.from(c2.keys()).forEach(char => {
    const a = c1.get(char) ? c1.get(char) : 0,
      b = c2.get(char);
    let origin,
      len = a;
    if (b > 1 || a > 1) {
      if (a === b) origin = "=";
      else if (a > b) {
        origin = "1";
        len = a;
      } else {
        origin = "2";
        len = b;
      }
      list.push({
        origin,
        len,
        char
      });
    }
    c1.delete(char);
  });
  return list
    .sort((a, b) => {
      if (b.len !== a.len) return b.len - a.len;
      if (a.origin !== b.origin) {
        switch ("=") {
          case a.origin:
            return 1;
            break;
          case b.origin:
            return -1;
            break;
          default:
            return a.origin - b.origin;
        }
      }
      return a.char > b.char ? +1 : -1;
    })
    .map(i => `${i.origin}:${i.char.repeat(i.len)}`)
    .join("/");
};

// const s1 = "my&friend&Paul has heavy hats! &";
// const s2 = "my friend John has many many friends &";
// console.log(mix(s1, s2));
// --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
