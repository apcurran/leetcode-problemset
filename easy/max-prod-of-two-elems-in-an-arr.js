"use strict";

// /**
//  * solution 0 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxProduct(nums) {
//     let max = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const currentProduct = (nums[i] - 1) * (nums[j] - 1);
//             max = Math.max(max, currentProduct);
//         }
//     }

//     return max;
// }

// /**
//  * solution 1
//  * time: O(n * log n) -- due to sorting first
//  * space: O(n) -- built-in uses timsort
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxProduct(nums) {
//     nums.sort((a, b) => b - a);
//     const largestNum = nums[0];
//     const nextLargestNum = nums[1];

//     return (largestNum - 1) * (nextLargestNum - 1);
// }

// /**
//  * solution 2
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxProduct(nums) {
//     let largestNum = 0;
//     let nextLargestNum = 0;

//     for (let num of nums) {
//         // requires that nextLargestNum be calculated first
//         nextLargestNum = Math.max(nextLargestNum, Math.min(largestNum, num));
//         largestNum = Math.max(largestNum, num);
//     }

//     return (largestNum - 1) * (nextLargestNum - 1);
// }

/**
 * solution 3 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let maxProd = 0;

    while (leftPointer < rightPointer) {
        const currMax = (nums[leftPointer] - 1) * (nums[rightPointer] - 1);
        maxProd = Math.max(maxProd, currMax);

        if (nums[leftPointer] < nums[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxProd;
}

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
console.log(maxProduct([3, 7])); // 12
