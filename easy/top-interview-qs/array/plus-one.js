"use strict";

// /** Solution 1 -- only works for smaller nums, breaks on large nums
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// function plusOne(digits) {
//     const intNum = digits.join("");
//     console.log(Number(intNum));
//     // const intNumPlusOne = intNum + 1;
//     // const numStrippedZeroesStr = String(intNumPlusOne).replace(/\b0+/g, "");

//     // return numStrippedZeroesStr
//     //         .split("")
//     //         .map((digitStr) => +digitStr);
// }

/** Solution 2 -- always works
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    // Iterate backwards
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1;

        if (digits[i] < 10) {
            return digits;
        }

        // ex. handle 49 case
        digits[i] = 0;
    }

    // Handle 99 case
    digits.unshift(1);

    return digits;
}

// console.log( plusOne([1, 2, 3]) ) // [1, 2, 4]
// console.log( plusOne([4, 3, 2, 1]) ) // [4, 3, 2, 2]
// console.log( plusOne([0]) ) // [1]
// console.log( plusOne([9]) ) // [1, 0]
// console.log( plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]) ) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
// console.log( plusOne([9, 9]) ) // [1, 0, 0]
console.log( plusOne([9, 9, 9]) ); // [1, 0, 0]