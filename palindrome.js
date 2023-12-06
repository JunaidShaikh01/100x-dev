/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  const reversedString = cleanedString.split("").reverse().join("");
  // const revStr = str.split("").reverse().join("");
  // const lowerStr = str.toLowerCase();
  // const lowerRevStr = revStr.toLowerCase();
  return reversedString === cleanedString;
}

module.exports = isPalindrome;
