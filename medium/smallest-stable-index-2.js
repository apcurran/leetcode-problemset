// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// function firstStableIndex(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         // GET MAX: from index 0 (beginning) to current index i
//         const currentMax = Math.max(...nums.slice(0, i + 1));
//         // GET MIN: from index i (current) to end of array (index n - 1)
//         const currentMin = Math.min(...nums.slice(i));
//         const diff = currentMax - currentMin;

//         if (diff <= k) {
//             return i;
//         }
//     }
//     // after exhausting entire array, return -1 as default index
//     return -1;
// }

/**
 * solution 2 -- prefix maxVal and suffix minVal
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function firstStableIndex(nums, k) {
    const n = nums.length;
    let minValues = new Array(n);
    minValues[n - 1] = nums[n - 1]; // set last minVal to last num of nums array

    for (let i = n - 2; i >= 0; i--) {
        minValues[i] = Math.min(minValues[i + 1], nums[i]);
    }

    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        maxValue = Math.max(maxValue, nums[i]);
        const currentDiff = maxValue - minValues[i];

        if (currentDiff <= k) {
            return i;
        }
    }
    // after exhausting entire array, return -1 as default index
    return -1;
}

console.log(firstStableIndex([5, 0, 1, 4], 3)); // 3
console.log(firstStableIndex([3, 2, 1], 1)); // -1
console.log(firstStableIndex([0], 0)); // 0
