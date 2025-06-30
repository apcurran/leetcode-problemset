"use strict";

// /**
//  * solution 1 -- recursive dfs
//  * time: O(n)
//  * space: O(log base10 (n))
//  *
//  * @param {number} n
//  * @return {number[]}
//  */
// function lexicalOrder(n) {
//     let results = [];

//     function dfs(current) {
//         if (current > n) return;

//         results.push(current);
//         const currentAdjusted = current * 10;

//         for (let nextDigit = 0; nextDigit <= 9; nextDigit++) {
//             dfs(currentAdjusted + nextDigit);
//         }
//     }

//     for (let i = 1; i <= 9; i++) {
//         dfs(i);
//     }

//     return results;
// }

/**
 * solution 2 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
    let lexicographicalOrderNums = [];
    let currentNumber = 1;

    for (let i = 0; i < n; i++) {
        lexicographicalOrderNums.push(currentNumber);

        if (currentNumber * 10 <= n) {
            currentNumber *= 10;
        } else {
            while (currentNumber % 10 === 9 || currentNumber >= n) {
                currentNumber = Math.floor(currentNumber / 10); //// remove last digit
            }

            // update value by 1
            currentNumber++;
        }
    }

    return lexicographicalOrderNums;
}

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
