"use strict";

// /**
//  * solution 1 -- Correct, but TLE
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function numberOfSubarrays(nums, k) {
//     let niceSubarraysCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let subarrayOddsCount = 0;

//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] % 2 === 1) {
//                 subarrayOddsCount++;
//             }

//             if (subarrayOddsCount === k) {
//                 niceSubarraysCount++;
//             }
//         }

//     }

//     return niceSubarraysCount;
// }
/**
 * solution 2 -- 3 pointer sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
    let niceSubarraysCount = 0;
    let oddCount = 0;
    let left = 0;
    let middle = 0;

    for (let right = 0; right < nums.length; right++) {
        // is odd num
        if (nums[right] % 2 === 1) {
            oddCount++;
        }

        // update window
        while (oddCount > k) {
            if (nums[left] % 2 === 1) {
                oddCount--;
            }

            // update left
            left++;
            // update middle
            middle = left;
        }

        if (oddCount === k) {
            while (nums[middle] % 2 === 0) {
                middle++;
            }

            niceSubarraysCount += (middle - left) + 1; // window size
        }
    }

    return niceSubarraysCount;
}

console.log(numberOfSubarrays([1,1,2,1,1], 3)); // 2
console.log(numberOfSubarrays([2,4,6], 1)); // 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)); // 16
