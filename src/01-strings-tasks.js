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
