const arithmeticValue = (value) => (arithmetic = (x) => x) => arithmetic(value);

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const minus = (y) => (x) => x - y;
const dividedBy = (y) => (x) => Math.floor(x / y);

const zero = arithmeticValue(0);
const one = arithmeticValue(1);
const two = arithmeticValue(2);
const three = arithmeticValue(3);
const four = arithmeticValue(4);
const five = arithmeticValue(5);
const six = arithmeticValue(6);
const seven = arithmeticValue(7);
const eight = arithmeticValue(8);
const nine = arithmeticValue(9);
