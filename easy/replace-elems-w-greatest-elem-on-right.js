"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// function replaceElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length -1) {
//             arr[i] = -1;
//             break;
//         }

//         const elemsToRight = arr.slice(i + 1);
//         const greatestElemToRight = Math.max(...elemsToRight);
//         arr[i] = greatestElemToRight;
//     }

//     return arr;
// }

/**
 * solution 2 -- iterative (optimized)
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
    let lastMaxNum = -1;

    // iterate backwards from end
    for (let i = arr.length - 1; i >= 0; i--) {
        const currNum = arr[i];
        arr[i] = lastMaxNum;
        lastMaxNum = Math.max(lastMaxNum, currNum);
    }

    return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18, 6, 6, 6, 1, -1]
console.log(replaceElements([400])); // [-1]
