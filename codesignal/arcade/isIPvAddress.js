// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso/solutions

isIPv4Address = s =>
  /^(([1-9]{2}|[0-9]|1([0-9]{2})|2([0-5]{2}))\.){3}([1-9]{2}|[0-9]|1([0-9]{2})|2([0-5]{2}))$/.test(
    s
  );
