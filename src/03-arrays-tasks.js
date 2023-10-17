// Task 1: Find an element in an array
function findElement(arr, value) {
  const index = arr.indexOf(value);
  return index !== -1 ? index : -1;
}

// Task 2: Generate an array of odd numbers
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

// Task 3: Double the elements in an array
function doubleArray(arr) {
  return arr.concat(arr);
}

// Task 4: Get an array of positive numbers
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}

// Task 5: Get an array of strings
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

// Task 6: Remove falsy values from an array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Task 7: Get an array of uppercase strings
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}

// Task 8: Get the lengths of strings in an array
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

// Task 9: Insert an item at a specific index in an array
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

// Task 10: Get the first n items of an array
function getHead(arr, n) {
  return arr.slice(0, n);
}

// Task 11: Get the last n items of an array
function getTail(arr, n) {
  return arr.slice(-n);
}

// Task 12: Convert a 2D array to a CSV string
function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

// Task 13: Get the squares of numbers in an array
function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}

// Task 14: Get the moving sum of an array
function getMovingSum(arr) {
  return arr.map((_, index) => arr.slice(0, index + 1).reduce((a, b) => a + b, 0));
}

// Task 15: Get every second item in an array
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

// Task 16: Propagate items in an array
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

// Task 17: Get the 3 largest numbers in an array
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

// Task 18: Count the positive numbers in an array
function getPositivesCount(arr) {
  return arr.filter((num) => typeof num === 'number' && num > 0).length;
}

// Task 19: Sort digit names by numeric order
function sortDigitNamesByNumericOrder(arr) {
  const digitOrder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => digitOrder.indexOf(a) - digitOrder.indexOf(b));
}

// Task 20: Get the sum of items in an array
function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + (typeof num === 'number' ? num : 0), 0);
}

// Task 21: Count the falsy values in an array
function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

// Task 22: Find all occurrences of an item in an array
function findAllOccurrences(arr, item) {
  return arr.reduce((count, currentItem) => (currentItem === item ? count + 1 : count), 0);
}

// Task 23: Convert an array to a comma-separated string
function toStringList(arr) {
  return arr.join(',');
}

// Task 24: Sort an array of objects by country and city
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

// Task 25: Create an identity matrix
function getIdentityMatrix(n) {
  const identityMatrix = [];
  for (let rowIndex = 0; rowIndex < n; rowIndex + 1) {
    const row = [];
    for (let colIndex = 0; colIndex < n; colIndex + 1) {
      row.push(rowIndex === colIndex ? 1 : 0);
    }
    identityMatrix.push(row);
  }
  return identityMatrix;
}

// Task 26: Create an array of integers within a specified range
function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

// Task 27: Get unique values from an array
function distinct(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Task 28: Group elements in an array by key and value
function group(array, keySelector, valueSelector) {
  return array.reduce((result, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    if (!result.has(key)) {
      result.set(key, [value]);
    } else {
      result.get(key).push(value);
    }

    return result;
  }, new Map());
}


// Task 29: Flatten an array of arrays
function selectMany(arr, childrenSelector) {
  return arr.map(childrenSelector).reduce((acc, children) => acc.concat(children), []);
}


// Task 30: Get an element from a multidimensional array by indexes
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((result, index) => result[index], arr);
}


// Task 31: Swap the head and tail of an array
function swapHeadAndTail(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return arr.slice(middleIndex).concat(arr.slice(0, middleIndex));
  }
  return arr.slice(middleIndex + 1).concat(arr[middleIndex], arr.slice(0, middleIndex));
}


// Export all the functions
module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
