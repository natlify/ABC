// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
//  Simple Encryption #1 - Alternating Split
//

const encrypt = (text, n) => {
  if (n <= 0 || !text) return text;
  let x = text.split("").reduce(
    (p, c, i) => {
      if (i % 2) p.odd.push(c);
      else p.even.push(c);
      return p;
    },
    { odd: [], even: [] }
  );
  return encrypt(x.odd.join("") + x.even.join(""), n - 1);
};
const decrypt = (encryptedText, n) => {
  if (n <= 0 || !encryptedText) return encryptedText;
  const firstHalf = encryptedText.split("");
  const secondHalf = firstHalf.splice(Math.floor(encryptedText.length / 2));
  let i = 0;
  return decrypt(
    secondHalf
      .reduce((p, c, i) => {
        p.push(c);
        if (i < firstHalf.length) p.push(firstHalf[i]);
        return p;
      }, [])
      .join(""),
    n - 1
  );
};
