const oddOrEven = a => {
  return a.reduce((p, c) => (p += c), 0) % 2 ? "odd" : "even";
};
