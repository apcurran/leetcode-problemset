/**
 * solution 1
 * n = nums length
 * time: O(n * k)
 * space: O(n + k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function largestInteger(nums, k) {
    let subarrayCounts = new Map();

    for (let i = 0; i <= nums.length - k; i++) {
        const uniqueNumsInSubarray = new Set(nums.slice(i, i + k));

        for (let num of uniqueNumsInSubarray) {
            subarrayCounts.set(num, (subarrayCounts.get(num) || 0) + 1);
        }
    }

    let result = -1;

    for (let [num, numCount] of subarrayCounts) {
        if (numCount === 1) {
            result = Math.max(result, num);
        }
    }

    return result;
}

console.log(largestInteger([3, 9, 2, 1, 7], 3)); // 7
