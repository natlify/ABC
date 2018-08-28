// https://www.codewars.com/kata/530e15517bc88ac656000716
//

getC = (c, offset) =>
  String.fromCharCode(((c.charCodeAt(0) - offset + 13) % 26) + offset);
rot13 = m =>
  m
    .split("")
    .map(
      e => (/[a-z]/.test(e) ? getC(e, 97) : /[A-Z]/.test(e) ? getC(e, 65) : e)
    )
    .join("");
