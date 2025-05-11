/**
 * Format a number in EUR currency style.
 * E.g. 4.73 -> "4,73 €"
 * @param {Number} price The number to format
 * @returns {String} Formatted price string in EUR.
 */
function formatToCurrency(price) {
  let result = price.toFixed(2);
  result = result.replace(".", ",");
  return result.concat(" €");
}