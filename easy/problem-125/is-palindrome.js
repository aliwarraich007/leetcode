/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  const cleanedS = s.toLowerCase().replace(/[^a-z0-9 ]/g, "");
  while (i > j) {
    if (cleanedS[i] !== cleanedS[j]) return false;
    ++i;
    --j;
  }
  return true;
};

console.log(isPalindrome("race a car"));
