# Equal Sides of an Array

URL: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/

## Description

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

## Test Cases

```py
@Test.describe("Basic tests")
def basic_tests():
    Test.assert_equals(find_even_index([1,2,3,4,3,2,1]),3)
    Test.assert_equals(find_even_index([1,100,50,-51,1,1]),1,)
    Test.assert_equals(find_even_index([1,2,3,4,5,6]),-1)
    Test.assert_equals(find_even_index([20,10,30,10,10,15,35]),3)
    Test.assert_equals(find_even_index([20,10,-80,10,10,15,35]),0)
    Test.assert_equals(find_even_index([10,-80,10,10,15,35,20]),6)
    Test.assert_equals(find_even_index(range(1,100)),-1)
    Test.assert_equals(find_even_index([0,0,0,0,0]),0,"Should pick the first index if more cases are valid")
    Test.assert_equals(find_even_index([-1,-2,-3,-4,-3,-2,-1]),3)
    Test.assert_equals(find_even_index(range(-100,-1)),-1)
    Test.assert_equals(find_even_index([8,8]),-1)
    Test.assert_equals(find_even_index([8,0]),0)
    Test.assert_equals(find_even_index([0,8]),1)
    Test.assert_equals(find_even_index([7,3,-3]),0)
    Test.assert_equals(find_even_index([8]),0)

@Test.describe("Random tests")
def random_tests():
    from random import randint
    find_even_sol=lambda arr, l=0, r="null", i=0: (lambda r: -1 if i>=len(arr) else i if r==l else find_even_sol(arr, l+arr[i], r-(0 if i+1>=len(arr) else arr[i+1]), i+1))(r if r!="null" else sum(arr[1:]))
    contract=lambda arr: (lambda pos: arr[:pos]+[sum(arr[pos:])])(randint(0,len(arr)-1))
    
    for _ in range(40):
        left=[randint(-20, 20) for qu in range(randint(10,20))]
        right=left[:]
        if randint(0,1): left[randint(0,len(left)-1)]+=randint(-20,20)
        left=sorted(contract(left), key=lambda a: randint(1,1000));right=sorted(contract(right), key=lambda a: randint(1,1000))
        arr=([]+left[:]+[randint(-20,20)]+right[:])[:]
        Test.it("Testing for %s" %arr)
        Test.assert_equals(find_even_index(arr[:]),find_even_sol(arr),"It should work for random inputs too")
```        

