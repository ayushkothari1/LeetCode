/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];
  for (char = 0; char < arr.length; char++) {
    result[char] = fn(arr[char], char);
  }
  return result;
};

console.log(
  map([2, 3, 5], function (n) {
    return n + char;
  }),
);
