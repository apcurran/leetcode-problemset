"use strict";

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// /**
//  * solution 1 -- time-limit exceeded
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function guessNumber(n) {
//     for (let i = 1; i < n; i++) {
//         const currGuess = guess(i);

//         if (currGuess === 0) return i;
//     }

//     return n;
// }

/**
 * solution 2 -- binary search
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const currGuess = guess(middle);

        if (currGuess === 0) {
            return middle;
        } else if (currGuess === 1) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return low;
}
