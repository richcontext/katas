function getLeftSum(index, array) {
  let sum = 0;

  for (let i = index; i >= 0; i--) {
    sum += array[i];
  }
  return sum;
}

function getRightSum(index, array) {
  let sum = 0;

  for (let i = index; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

function findEvenIndex(arr) {
  let matchForConditions = null;

  for (var i = 0; i < arr.length; i++) {
    const leftSum = getLeftSum(i, arr);
    const rightSum = getRightSum(i, arr);

    if (leftSum === rightSum) {
      matchForConditions = i;
      break;
    }
  }
  return matchForConditions;
}
