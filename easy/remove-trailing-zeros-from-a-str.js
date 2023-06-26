"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} numStr
//  * @return {string}
//  */
// function removeTrailingZeros(numStr) {
//     let isNonZeroNumHitYet = false;
//     let result = [];

//     for (let i = numStr.length - 1; i >= 0; i--) {
//         const value = numStr[i];

//         if (!isNonZeroNumHitYet) {
//             // check for and skip 0s
//             if (value === "0") {
//                 continue;
//             } else {
//                 isNonZeroNumHitYet = true;
//             }
//         }

//         result.push(value);
//     }

//     return result
//             .reverse()
//             .join("");
// }

/**
 * solution 2 -- regex
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} numStr
 * @return {string}
 */
function removeTrailingZeros(numStr) {
    return numStr.replace(/0+$/, "");
}

console.log( removeTrailingZeros("51230100") ); // "512301"
