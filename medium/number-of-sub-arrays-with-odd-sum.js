"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} arr
//  * @return {number}
//  */
// function numOfSubarrays(arr) {
//     const MOD_AMOUNT = 10 ** 9 + 7;
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let currentSum = 0;

//         for (let j = i; j < arr.length; j++) {
//             currentSum += arr[j];

//             if (currentSum % 2 !== 0) {
//                 count++;
//             }
//         }
//     }

//     return count % MOD_AMOUNT;
// }

/**
 * solution 2 -- prefix sum
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @return {number}
 */
function numOfSubarrays(arr) {
    const MOD_AMOUNT = 10 ** 9 + 7;
    let prefixSum = 0;
    let oddCount = 0;
    let evenCount = 0;
    let result = 0;

    for (let num of arr) {
        prefixSum += num;

        if (prefixSum % 2 !== 0) {
            // odd case
            result = (result + 1 + evenCount) % MOD_AMOUNT;
            // update var
            oddCount++;
        } else {
            // even case
            result = (result + oddCount) % MOD_AMOUNT;
            evenCount++;
        }
    }

    return result;
}

console.log(numOfSubarrays([1, 3, 5])); // 4
console.log(numOfSubarrays([2, 4, 6])); // 0
