"use strict";

// /**
//  * solution 1 -- summation formula
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function pivotInteger(n) {
//     for (let pivot = 1; pivot <= n; pivot++) {
//         const sequenceSumUpToPivot = getSequenceSum(1, pivot);
//         const sequenceSumAfterPivot = getSequenceSum(pivot, n);

//         if (sequenceSumUpToPivot === sequenceSumAfterPivot) return pivot;
//     }

//     // if none work
//     return -1;
// }

// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  * @returns {number}
//  */
// function getSequenceSum(a, b) {
//     return ((a + b) * (b - a + 1)) / 2;
// }

// /**
//  * solution 2 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function pivotInteger(n) {
//     for (let i = 1; i <= n; i++) {
//         let sumLeft = 0;
//         let sumRight = 0;

//         for (let j = 1; j <= i; j++) {
//             sumLeft += j;
//         }

//         for (let j = i; j <= n; j++) {
//             sumRight += j;
//         }

//         if (sumLeft === sumRight) {
//             return i; // pivot
//         }
//     }

//     // no pivot found
//     return -1;
// }

/**
 * solution 3 -- two pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function pivotInteger(n) {
    if (n === 1) return n;

    let leftValue = 1;
    let rightValue = n;
    let sumLeft = leftValue;
    let sumRight = rightValue;

    while (leftValue < rightValue) {
        if (sumLeft < sumRight) {
            // move left pointer
            leftValue++;
            sumLeft += leftValue;
        } else {
            // move right pointer
            rightValue--;
            sumRight += rightValue;
        }

        // pivot condition
        if (sumLeft === sumRight && leftValue + 1 === rightValue - 1) {
            return leftValue + 1;
        }
    }

    // no pivot found
    return -1;
}

console.log( pivotInteger(8) ); // 6
