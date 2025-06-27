"use strict";

// /** Solution 1
//  * @param {number} num
//  * @return {number}
//  */
// function reverse(num) {
//     if (num === 0) return 0;

//     const negativeMultiplier = num < 0 ? -1 : 1;
//     const resultStr = Math.abs(num)
//                     .toString()
//                     .split("")
//                     .reverse()
//                     .join("");

//     const resultNum = Number(resultStr);

//     if (Math.abs((2 ** 31) - 1) < resultNum) {
//         return 0;
//     }

//     return resultNum * negativeMultiplier;
// }

/**
 * @param {number} num
 * @return {number}
 */
function reverse(num) {
    if (num === 0) return 0;

    const negativeMultiplier = num < 0 ? -1 : 1;
    const positiveNumStr = String(Math.abs(num));
    let resultStr = "";

    for (let i = positiveNumStr.length - 1; i >= 0; i--) {
        resultStr += positiveNumStr[i];
    }

    const resultNum = Number(resultStr);

    if (Math.abs((2 ** 31) - 1) < resultNum) {
        return 0;
    }

    return resultNum * negativeMultiplier;
}

console.log(reverse(123)); // 321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 321
console.log(reverse(-456)); // 321
