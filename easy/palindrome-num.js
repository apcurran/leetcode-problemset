"use strict";

// /**
//  * Solution 1 -- O(n)
//  * @param {number} x
//  * @return {boolean}
//  */
// function isPalindrome(x) {
//     const xStr = String(x);
//     let reversedXStr = "";

//     for (let i = xStr.length - 1; i >= 0; i--) {
//         reversedXStr += xStr[i];
//     }

//     return +reversedXStr === x;
// }

/**
 * Solution 2 -- O(n)
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    const reversedXStr = x.toString().split("").toReversed().join("");

    return Number(reversedXStr) === x;
}

console.log(isPalindrome(121)); // true -> 121 reads the same left to right and right to left
console.log(isPalindrome(-121)); // false -> -121 reads differently when reversed
console.log(isPalindrome(10)); // false -> 10 reads differently when reversed
console.log(isPalindrome(-101)); // false -> -101 reads differently when reversed
