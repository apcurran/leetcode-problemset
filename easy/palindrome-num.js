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
    const reversedXStr = x
                            .toString()
                            .split("")
                            .reverse()
                            .join("");

    return Number(reversedXStr) === x;
}

console.log( isPalindrome(121) ); // true -> 121 reads the same left to right and right to left
console.log( isPalindrome(-121) ); // true -> 121 reads the same left to right and right to left
console.log( isPalindrome(10) ); // true -> 121 reads the same left to right and right to left
console.log( isPalindrome(-101) ); // true -> 121 reads the same left to right and right to left