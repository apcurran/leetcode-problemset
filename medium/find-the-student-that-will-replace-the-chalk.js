"use strict";

/**
 * solution 1 -- prefix sum
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function chalkReplacer(chalk, k) {
    let chalkSum = 0;

    for (let chalkPieces of chalk) {
        chalkSum += chalkPieces;

        if (chalkSum > k) {
            break;
        }
    }

    k %= chalkSum;

    for (let i = 0; i < chalk.length; i++) {
        const currentChalkPieces = chalk[i];

        if (k < currentChalkPieces) {
            return i;
        }

        k -= currentChalkPieces;
    }
}

// /**
//  * solution 2 -- brute force (correct, but TLE)
//  * time: O(k * n)
//  * space: O(1)
//  *
//  * @param {number[]} chalk
//  * @param {number} k
//  * @return {number}
//  */
// function chalkReplacer(chalk, k) {
//     while (k > 0) {
//         // remove chalk from k
//         for (let i = 0; i < chalk.length; i++) {
//             const chalkPieces = chalk[i];

//             if (chalkPieces > k) {
//                 return i;
//             }

//             k -= chalkPieces;
//         }
//     }

//     return 0;
// }

console.log(chalkReplacer([5, 1, 5], 22)); // 0
console.log(chalkReplacer([3, 4, 1, 2], 25)); // 1
