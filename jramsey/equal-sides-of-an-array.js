/*
// Implicit
function <name>(<param>) {
    <body></body>
}

// Explicit
const <name> = function(<param>) {
    <body></body>
}

// Function with two parameters
const <name> = function(<param>, <param2>) {
    <body></body>
}

// Function with a parameter that have default values
const <name> = function(<param> = <default value>) {
    <body></body>
}

// Arrow Function Declaration
const <name> = (<param>, <param2>) => {
    <body><body>
}
*/

/*
Creating the function
function leftSum(blipBlowOne, PlumbusTwo) {
    
    // dlksjflkdsjlfk
} 

Calling the function
leftSum(1, "B")
*/

// const isEqualSides = (calArray) => {
//   calArray.forEach((element, indexSpace) => {
//     // <variable that will hold return value> <= return a value <=  <sumLeft function called>
//     // <variable> <= return value of sumLeft
//     var leftSide = sumLeft(callArray, indexSpace);
//     var rightSide = sumRight(callArray, indexSpace);

//     // sumLeft 4, sumRight 4
//     if (sumLeft === sumRight) {
//       return indexSpace;
//     }
//   });

//   return -1;
// }

// For Loop Version 1 ( pre ES6 )
/* 
    for (var <alias> <start>; <condition for when to stop>; <alias> += 1) {
        
    }
*/

/****
How do I get the value of an array at a certain index?

<nameOfArray>[<index>]
// Example
//         Index =   0,   1,   2
// var someArray = ["A", "B", "C"]
// someArray[1] = "B"
// someArray[2] = "C"
*****/

/*
Function stuff to remember

1. How to get the length
2. What are all the different ways to declare a function
3. How to pass in parameters
4. Adding default values to parameters
5. Return values
*/

// const sumLeft = (calArray, currentSpace) => {
//   var sum = 0;
//   var start = 0;
//   var limit = currentSpace;

//   for (var atSpace = start; atSpace < limit; atSpace += 1) {
//     //       sum     += calArray[atSpace]
//     // running total += value at index
//     sum += calArray[atSpace];
//   }

//   return sum;
// }


// const sumRight = (calArray, currentSpace) => {
//   var sum = 0;
//   var start = currentSpace;
//   var limit = calArray.length - 1

//   for (var atSpace = currentSpace; atSpace <= limit; atSpace += 1) {
//     sum += currentSpace;
//   }

//   return sum;
// }

function findEvenIndex(callArray) {
  let returnValue = -1;
  
  for (var atSpace = 0; atSpace <= callArray.length - 1; atSpace += 1) {
    var leftSide = sumLeft(callArray, atSpace);
    var rightSide = sumRight(callArray, atSpace);

    if (leftSide === rightSide) {
      returnValue = atSpace
      break;
    }
  }

  return returnValue;
}

function sumLeft(callArray, currentSpace) {
  var sum = 0;
  var start = 0;
  var limit = currentSpace;

  for (var atSpace = start; atSpace < limit; atSpace += 1) {
    sum += callArray[atSpace];
  }

  return sum;
}

function sumRight(callArray, currentSpace) {
  var sum = 0;
  var start = currentSpace;
  var limit = callArray.length - 1

  for (var atSpace = currentSpace + 1; atSpace <= limit; atSpace += 1) {
    sum += callArray[atSpace];
  }

  return sum;
}
