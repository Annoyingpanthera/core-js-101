/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of the given string.
 *
 * @param {string} value
 * @return {number}
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of a string template and given parameters firstName and lastName.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from a template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 */
function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value
 * @return {string}
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes leading and trailing whitespace characters from a string.
 *
 * @param {string} value
 * @return {string}
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of a string inside another string.
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from a tag string.
 *
 * @param {string} str
 * @return {string}
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Converts all characters of the specified string into uppercase.
 *
 * @param {string} str
 * @return {string}
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts emails from a single string with emails list delimited by semicolons.
 *
 * @param {string} str
 * @return {array}
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of a rectangle with the specified width and height
 * using pseudographic characters.
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 */
function getRectangleString(width, height) {
  const horizontalBorder = `┌${'─'.repeat(width - 2)}┐\n`;
  const middle = `│${' '.repeat(width - 2)}│\n`;
  const rectangle = horizontalBorder + middle.repeat(height - 2) + horizontalBorder;
  return rectangle;
}

/**
 * Encode the specified string with ROT13 cipher.
 *
 * @param {string} str
 * @return {string}
 */
function encodeToRot13(str) {
  return str.replace(/[a-zA-Z]/g, (c) => {
    const offset = c <= 'Z' ? 65 : 97;
    const charCode = c.charCodeAt(0);
    const rotatedCharCode = (((charCode - offset + 13) % 26) + offset);
    return String.fromCharCode(rotatedCharCode);
  });
}


/**
 * Returns true if the value is a string; otherwise, false.
 *
 * @param {string} value
 * @return {boolean}
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the playing card id based on the specified card string.
 *
 * @param {string} value
 * @return {number}
 */
function getCardId(value) {
  const cards = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return cards.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
/**
 * Returns the area of a rectangle given by width and height.
 *
 * @param {number} width
 * @param {number} height
 * @return {number}
 */
function getRectangleArea(width, height) {
  return width * height;
}

/**
 * Returns the circumference of a circle given by the radius.
 *
 * @param {number} radius
 * @return {number}
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns the average of two numbers.
 *
 * @param {number} value1 - The first number.
 * @param {number} value2 - The second number.
 * @returns {number} The average of value1 and value2.
 */
function getAverage(value1, value2) {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Both value1 and value2 must be numbers.');
  }

  return (value1 + value2) / 2;
}


/**
 * Returns the distance between two points by Cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Returns the root of a linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

/**
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    (x1 * x2 + y1 * y2)
    / (Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2)),
  );
}


/**
 * Returns the last digit of an integer number.
 *
 * @param {number} value
 * @return {number}
 */
function getLastDigit(value) {
  return Math.abs(value % 10);
}

/**
 * Returns a number by the given string representation.
 *
 * @param {string} value
 * @return {number}
 */
function parseNumberFromString(value) {
  return parseFloat(value);
}

/**
 * Returns the diagonal length of the rectangular parallelepiped given by its sides a, b, and c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

/**
 * Returns the number rounded to the specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 */
function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

/**
 * Returns true if the number is prime; otherwise, false.
 *
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Tries to convert value to a number and returns it if conversion was successful;
 * otherwise returns the default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 */
function toNumber(value, def) {
  const num = parseFloat(value);
  return Number.isNaN(num) ? def : num;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
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
/**
 * Returns the 'Fizz', 'Buzz' or an original number using the following rules:
 * 1) Return the original number
 * 2) If the number is a multiple of three, return 'Fizz'
 * 3) For multiples of five, return 'Buzz'
 * 4) For numbers that are multiples of both three and five, return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } if (num % 3 === 0) {
    return 'Fizz';
  } if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 */
function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i + 1) {
    sum += i;
  }
  return sum;
}

/**
 * Returns true if a triangle can be built with the specified sides a, b, c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean}
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true if two specified axis-aligned rectangles overlap, otherwise false.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {boolean}
 */
function doRectanglesOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.left + rect2.width
    && rect1.left + rect1.width > rect2.left
    && rect1.top < rect2.top + rect2.height
    && rect1.top + rect1.height > rect2.top
  );
}

/**
 * Returns true if a point lies inside the circle, otherwise false.
 *
 * @param {object} circle
 * @param {object} point
 * @return {boolean}
 */
function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2,
  );
  return distance <= circle.radius;
}

/**
 * Returns the first non-repeated character in the specified string, or null if none is found.
 *
 * @param {string} str
 * @return {string}
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i + 1) {
    const char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {boolean} isStartIncluded
 * @param {boolean} isEndIncluded
 * @return {string}
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${Math.min(a, b)}, ${Math.max(a, b)}${endBracket}`;
}

/**
 * Reverse the specified string.
 *
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number.
 *
 * @param {number} num
 * @return {number}
 */
function reverseInteger(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
  return num < 0 ? -reversed : reversed;
}

/**
 * Validates the CCN (credit card number) and returns true if CCN is valid and false otherwise.
 *
 * @param {number} ccn
 * @return {boolean}
 */
function isCreditCardNumber(ccn) {
  const ccnStr = ccn.toString();
  let sum = 0;
  let double = false;

  for (let i = ccnStr.length - 1; i >= 0; i - 1) {
    let digit = parseInt(ccnStr[i], 10);

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
}

/**
 * Returns the digital root of an integer.
 *
 * @param {number} num
 * @return {number}
 */
function getDigitalRoot(num) {
  if (num < 10) {
    return num;
  }

  let sum = 0;
  let currentNum = num; // Create a new variable to hold the modified value

  while (currentNum) {
    sum += currentNum % 10;
    currentNum = Math.floor(currentNum / 10);
  }

  return getDigitalRoot(sum);
}

/**
 * Returns true if the specified string has balanced brackets and false otherwise.
 *
 * @param {string} str
 * @return {boolean}
 */
function isBracketsBalanced(str) {
  const bracketPairs = {
    '}': '{',
    ']': '[',
    ')': '(',
    '>': '<',
  };

  const checkBalance = (input, stack = []) => {
    if (input.length === 0) {
      return stack.length === 0;
    }

    const char = input[0];

    if ('{[()<>}'.includes(char)) {
      if ('{[()<>'.includes(char)) {
        stack.push(char);
      } else if (stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }

    return checkBalance(input.slice(1), stack);
  };

  return checkBalance(str);
}

/**
 * Returns the n-ary (binary, ternary, etc.) representation of the specified number.
 *
 * @param {number} num
 * @param {number} n
 * @return {string}
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for a specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }

  const parts = pathes[0].split('/');
  for (let i = 1; i < pathes.length; i + 1) {
    const currentPathParts = pathes[i].split('/');
    for (let j = 0; j < parts.length; j + 1) {
      if (parts[j] !== currentPathParts[j]) {
        parts.splice(j);
        break;
      }
    }
  }

  if (parts.length === 1 && parts[0] === '') {
    return '/';
  }

  return parts.join('/');
}

/**
 * Returns the product of two specified matrices.
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 */
function getMatrixProduct(m1, m2) {
  const result = [];
  for (let i = 0; i < m1.length; i + 1) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j + 1) {
      result[i][j] = 0;
      for (let k = 0; k < m1[0].length; k + 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

/**
 * Returns the winner in the current tic-tac-toe position.
 *
 * @param {array} position
 * @return {string}
 */
function evaluateTicTacToePosition(position) {
  for (let row = 0; row < 3; row += 1) {
    if (position[row][0] === position[row][1] && position[row][1] === position[row][2]) {
      return position[row][0];
    }
  }

  for (let col = 0; col < 3; col += 1) {
    if (position[0][col] === position[1][col] && position[1][col] === position[2][col]) {
      return position[0][col];
    }
  }

  if (
    (position[0][0] === position[1][1] && position[1][1] === position[2][2])
    || (position[0][2] === position[1][1] && position[1][1] === position[2][0])
  ) {
    return position[1][1];
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
