# Decode the Morse code

URL: https://www.codewars.com/kata/54b724efac3d5402db00065e

## Description

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
#should return "HEY JUDE"

NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

    Coffeescript/C++/Go/JavaScript/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
    C#: MorseCode.Get(".--") (returns string)
    Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
    Elm: MorseCodes.get : Dict String String
    Haskell: morseCodes ! ".--" (Codes are in a Map String String)
    Java: MorseCode.get(".--")
    Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
    Rust: self.morse_code
    Scala: morseCodes(".--")

    C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code, advanced.

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

