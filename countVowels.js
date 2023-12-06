/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerStr = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (const cher of lowerStr) {
    if (vowels.includes(cher)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
