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