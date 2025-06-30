"use strict";

// /**
//  * Solution 1
//  * Time: O(n)
//  * Space: O(1)
//  *
//  * @param {number} num
//  * @return {number}
//  */
// function numberOfSteps(num) {
//     let stepsTotal = 0;

//     while (num) {
//         if (num % 2 === 0) {
//             // Even
//             stepsTotal++;
//             num /= 2;
//         } else {
//             stepsTotal++;
//             num--;
//         }
//     }

//     return stepsTotal;
// }

/**
 * Solution 2 -- recursive
 * Time: O(n)
 * Space: O(n) -- tracking call stack
 *
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num, count = 0) {
    if (num === 0) return count;

    if (num % 2 === 0) {
        return numberOfSteps(num / 2, count + 1);
    } else {
        return numberOfSteps(num - 1, count + 1);
    }
}

console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
