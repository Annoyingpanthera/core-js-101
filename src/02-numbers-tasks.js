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
