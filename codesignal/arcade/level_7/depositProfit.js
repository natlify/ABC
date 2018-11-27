// https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb

depositProfit = (deposit, rate, threshold) => {
  let acc = deposit,
    i = 0;
  while (acc < threshold) {
    acc += (rate / 100) * acc;
    i++;
  }
  return i;
};

console.log(depositProfit(1, 100, 200));
