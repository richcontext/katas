const runTests = require('./run-tests');

// Original Solution:
// 
// function nextSmaller(n) {
//   const nStr = n.toString();
//   const nArr = nStr.split('');
//   const hasDuplicates = nArr.some((nbr, idx) => nArr.indexOf(nbr) !== idx);
//   const re = RegExp(`[${n}]`, 'g');

//   for (let i = n - 1; i >= 0; i--) {
//     const iStr = i.toString();
    
//     if (iStr.length !== nStr.length) {
//       return -1;
//     }

//     const isAnswer = hasDuplicates
//       ? findDuplicateAnswer(re, iStr, nStr)
//       : findUniqueAnswer(re, iStr, nStr);

//      if (isAnswer) {
//       return i;
//     }
//   }

//   return -1;
// }

// function findUniqueAnswer(test, testStr, origStr) {
//   return [...new Set(testStr.match(test))].length === origStr.length;
// }

// function findDuplicateAnswer(test, testStr, origStr) {
//   const matches = testStr.match(test) || [];
//   return JSON.stringify(matches.sort()) === JSON.stringify(origStr.split('').sort());
// }

function nextSmaller(n) {
  const numberString = n.toString();
  const fulcrum = findFulcrum(n);

  if (!fulcrum) {
    return -1;
  }

  const initialString = numberString.substr(0, fulcrum.pos);
  const predicate = numberString.substr(fulcrum.pos + 1).split('');
  const updatedPredicate = substituteFulcrum(fulcrum, predicate);
  const newNumber = toNumber(`${initialString}${updatedPredicate}`);

  if (newNumber > n || newNumber.toString().length < numberString.length) {
    return -1;
  }

  return newNumber;
}

function findFulcrum(n) {
  const nbrList = n.toString().split('');

  for (let i = nbrList.length - 1; i >= 0; i--) {
    if (toNumber(nbrList[i]) > toNumber(nbrList[i + 1])) {
      return { value: nbrList[i], pos: i };
    }
  }
}

function toNumber(str) {
  return parseInt(str, 10);
}

function substituteFulcrum(fulcrum, predicate) {
  const sortedPredicate = predicate.sort((a, b) => b - a);
  const newPredicate = findSubstitute(fulcrum.value, sortedPredicate);

  return newPredicate.join('');
}

function findSubstitute(value, predicate) {
  for (let i = 0; i < predicate.length; i++) {
    if (Math.max(...predicate.slice(i)) < value) {
      return [predicate[i], ...predicate.slice(0, i), value, ...predicate.slice(i + 1)];
    }
  }
}

runTests(
  false,
  [
    [21, 12],
    [917, 791],
    [907, 790],
    [531, 513],
    [135, -1],
    [2071, 2017],
    [1027, -1],
    [123456798, 123456789],
    [123456789, -1],
    [1234567908, 1234567890],
    [414, 144]
  ],
  nextSmaller
);
