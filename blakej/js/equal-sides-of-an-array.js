/* 
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
 */

const runTests = require("./run-tests");

function findEvenIndex(arr) {
  let leftSum = 0;
  let position = 0;

  for (let i = position; i < arr.length; i++) {
    if (leftSum === sum(arr.slice(i + 1))) {
      return position;
    }

    leftSum += arr[i];
    position++;
  }

  return -1;
}

function sum(list) {
  return list.reduce((acc, n) => acc + n, 0);
}

runTests(
  false,
  [
    [[1, 2, 3, 4, 3, 2, 1], 3],
    [[10, -80, 10, 10, 15, 35, 20], 6],
    [[20, 10, -80, 10, 10, 15, 35], 0],
    [[1, 2, 3, 4, 5, 6], -1]
  ],
  findEvenIndex
);
