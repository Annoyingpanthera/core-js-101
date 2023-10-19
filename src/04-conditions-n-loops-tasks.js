/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
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
  if (n === 0) {
    return 1; // 0! is defined as 1
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
  return (n2 * (n2 + 1) - n1 * (n1 - 1)) / 2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
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
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 */
function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2,
  );
  return distance < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 */
function findFirstSingleChar(str) {
  const charCount = new Map();

  // Count the frequency of each character
  str.split('').forEach((char) => {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });

  // Find the first non-repeated character
  const firstNonRepeatedChar = str.split('').find((char) => charCount.get(char) === 1);

  // If no non-repeated character is found, return null
  return firstNonRepeatedChar || null;
}


/**
 * Returns the string representation of a math interval,
 * specified by two points and include/exclude flags.
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${Math.min(a, b)}, ${Math.max(a, b)}${endBracket}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 */
function reverseInteger(num) {
  let reversed = 0;
  let originalNum = num; // Store the original number
  while (originalNum !== 0) {
    reversed = reversed * 10 + (originalNum % 10);
    originalNum = Math.trunc(originalNum / 10);
  }
  return reversed;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 * See algorithm here: https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} ccn
 * @return {boolean}
 */
function isCreditCardNumber(ccn) {
  // Convert the credit card number to an array of digits
  const digits = ccn.toString().split('').map(Number);

  // Start from the rightmost digit (check digit)
  let isEven = false;
  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let digit = digits[i];

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
}
/**
 * Returns the digital root of an integer:
 *   step1: find the sum of all digits
 *   step2: if sum > 9 then go to step1, otherwise return the sum
 *
 * @param {number} num
 * @return {number}
 */
function getDigitalRoot(num) {
  let digitalRoot = num;
  while (digitalRoot > 9) {
    digitalRoot = digitalRoot
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, digit) => acc + digit, 0);
  }
  return digitalRoot;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 */
function isBracketsBalanced(str) {
  const stack = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (bracketPairs[char]) {
      // If the character is an opening bracket, push it onto the stack.
      stack.push(char);
    } else {
      // If the character is a closing bracket, pop the last element from the stack.
      const lastBracket = stack.pop();

      // Check if it matches the current closing bracket.
      if (bracketPairs[lastBracket] !== char) {
        // If it doesn't match or if the stack is empty, return false.
        return false;
      }
    }
  }

  // After processing all characters, the stack should be empty for the string to be balanced.
  return stack.length === 0;
}


/**
 * Returns the n-ary representation of the specified number.
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for the specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) {
    return '';
  }

  const parts = pathes[0].split('/');

  for (let i = 1; i < pathes.length; i += 1) {
    const currentPathParts = pathes[i].split('/');
    for (let j = 0; j < parts.length; j += 1) {
      if (parts[j] !== currentPathParts[j]) {
        parts.splice(j);
        break;
      }
    }
  }

  if (parts.length === 1 && parts[0] === '') {
    return '/';
  }

  return parts.join('/') + (parts.length > 0 ? '/' : '');
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
  for (let i = 0; i < m1.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      result[i][j] = 0;
      for (let k = 0; k < m1[0].length; k += 1) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return result;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * Position is provided as a 3x3 array with the following values: 'X', '0', undefined
 * Function should return who is the winner in the current position according to the game rules.
 *
 * @param {array} position
 * @return {string}
 */
function evaluateTicTacToePosition(position) {
  const winConditions = [
    // Rows
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    // Columns
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    // Diagonals
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  let result;

  winConditions.forEach((condition) => {
    if (condition.every((cell) => cell === 'X')) {
      result = 'X';
    }
    if (condition.every((cell) => cell === '0')) {
      result = '0';
    }
  });

  return result;
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
