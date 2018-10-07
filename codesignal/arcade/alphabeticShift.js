// https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

alphabeticShift = s =>
  s
    .split("")
    .map(e => String.fromCharCode(((e.charCodeAt(0) - 97 + 1) % 26) + 97))
    .join("");
