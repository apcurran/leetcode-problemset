/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function hasIncreasingSubarrays(nums, k) {
    for (let i = 0; i <= nums.length - 2 * k; i++) {
        if (isStrictlyIncreasing(nums, i, k) && isStrictlyIncreasing(nums, i + k, k)) {
            return true;
        }
    }

    return false;
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} k
 * @returns {boolean}
 */
function isStrictlyIncreasing(nums, start, k) {
    for (let i = start; i < start + k - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)); // true
console.log(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5)); // false
