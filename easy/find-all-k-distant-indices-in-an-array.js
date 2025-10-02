/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
function findKDistantIndices(nums, key, k) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (Math.abs(i - j) <= k && nums[j] === key) {
                results.push(i);

                break; // prevent duplicates
            }
        }
    }

    return results;
}

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)); // [1, 2, 3, 4, 5, 6]
