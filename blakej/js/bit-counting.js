/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
const runTests = require("./run-tests");

function countBits(n) {
  const match = n.toString(2).match(/1/g);
  return match ? match.length : 0;
};

runTests(
  [
    [0, 0],
    [4, 1],
    [7, 3],
    [9, 2],
    [10, 2],
    [1234, 5]
  ],
  countBits
);