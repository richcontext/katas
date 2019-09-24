const runTests = require('./run-tests');

const zero = fn => useNumber(fn, 0);
const one = fn => useNumber(fn, 1);
const two = fn => useNumber(fn, 2);
const three = fn => useNumber(fn, 3);
const four = fn => useNumber(fn, 4);
const five = fn => useNumber(fn, 5);
const six = fn => useNumber(fn, 6);
const seven = fn => useNumber(fn, 7);
const eight = fn => useNumber(fn, 8);
const nine = fn => useNumber(fn, 9);

const plus = x => y => y + x;
const minus = x => y => y - x;
const times = x => y => y * x;
const dividedBy = x => y => Math.floor(y / x);

function useNumber(fn, n) {
  if (fn) {
    return fn(n);
  }

  return n;
}

runTests([
  [seven(times(five())), 35],
  [four(plus(nine())), 13],
  [eight(minus(three())), 5],
  [six(dividedBy(two())), 3],
  [four(dividedBy(six())), 0]
]);