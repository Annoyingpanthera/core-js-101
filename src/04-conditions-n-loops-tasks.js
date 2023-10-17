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
