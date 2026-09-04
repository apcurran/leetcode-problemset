/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function firstStableIndex(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        const largest = Math.max(...nums.slice(0, i + 1));
        const smallest = Math.min(...nums.slice(i));
        const diff = largest - smallest;

        if (diff <= k) {
            return i;
        }
    }

    // default
    return -1;
}

console.log(firstStableIndex([5, 0, 1, 4], 3)); // 3
