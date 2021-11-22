"use strict";

// /** Valid Solution 1 O(n^2)
//  * @param {number[]} nums
//  * @return {number}
//  */
// function missingNumber(nums) {
//     const n = nums.length;
//     let missingNum;

//     for (let i = 0; i <= n; i++) {
//         if (!nums.includes(i)) missingNum = i;
//     }

//     return missingNum;
// }

// /** Valid Solution 2 O(n log n)
//  * @param {number[]} nums
//  * @return {number}
//  */
// function missingNumber(nums) {
//     const numsSet = new Set(nums);

//     for (let i = 0; i <= numsSet.size; i++) {
//         if (!numsSet.has(i)) return i;
//     }
// }

/** Valid Solution 3 O(n)
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((total, curr) => total + curr, 0);

    return expectedSum - actualSum;
}

console.log( missingNumber([9,6,4,2,3,5,7,0,1]) ) // 8
console.log( missingNumber([3,0,1]) ) // 2