# Bit Counting

## Description

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

## Test Cases

```
test.assert_equals(countBits(0), 0);
test.assert_equals(countBits(4), 1);
test.assert_equals(countBits(7), 3);
test.assert_equals(countBits(9), 2);
test.assert_equals(countBits(10), 2);
test.assert_equals(countBits(26), 3);
test.assert_equals(countBits(77231418), 14);
test.assert_equals(countBits(12525589), 11);
test.assert_equals(countBits(3811), 8);
test.assert_equals(countBits(392902058), 17);
test.assert_equals(countBits(1044), 3);
test.assert_equals(countBits(10030245), 10);
test.assert_equals(countBits(183337941), 16);
test.assert_equals(countBits(20478766), 14);
test.assert_equals(countBits(103021), 9);
test.assert_equals(countBits(287), 6);
test.assert_equals(countBits(115370965), 15);
test.assert_equals(countBits(31), 5);
test.assert_equals(countBits(417862), 7);
test.assert_equals(countBits(626031), 12);
test.assert_equals(countBits(89), 4);
test.assert_equals(countBits(674259), 10);
```
