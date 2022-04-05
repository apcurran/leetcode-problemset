"use strict";

// /**
//  * solution 1 -- nested loops (brute force)
//  * time: O(n^2)
//  * space: O(1)
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// function twoSum(numbers, target) {
//     // iterate nums
//     for (let outerIndex = 0; outerIndex < numbers.length; outerIndex++) {
//         const outerNum = numbers[outerIndex];
//         // for each num !== num attempt to add to sum up to target val
//         innerloop:
//         for (let innerIndex = 0; innerIndex < numbers.length; innerIndex++) {
//             const innerNum = numbers[innerIndex];
//             const sum = outerNum + innerNum;

//             // check for same elem (can't use same elem twice)
//             if (outerIndex === innerIndex) continue;

//             // check for sum greater than target (skip the rest since input arr is sorted asc)
//             if (sum > target) break innerloop;

//             // if target is reached, return index arr as index1 + 1 and index2 + 1
//             if (sum === target) {
//                 return [outerIndex + 1, innerIndex + 1];
//             }
//         }
//     }
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while (leftPointer < rightPointer) {
        const currLeftNum = numbers[leftPointer];
        const currRightNum = numbers[rightPointer];
        const currSum = currLeftNum + currRightNum;

        if (currSum > target) {
            rightPointer--;
        } else if (currSum < target) {
            leftPointer++;
        } else {
            return [leftPointer + 1, rightPointer + 1];
        }
    }
}

console.log( twoSum([2, 7, 11, 15], 9) ); // [1, 2]
console.log( twoSum([2, 3, 4], 6) ); // [1, 3]
console.log( twoSum([-1, 0], -1) ); // [1, 2]
console.log( twoSum([0, 0, 3, 4], 0) ); // [1, 2]
