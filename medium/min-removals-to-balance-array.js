/**
 * solution 1 -- sort & two pointers
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minRemoval(nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let result = n;
    let right = 0;

    for (let left = 0; left < n; left++) {
        while (right < n && nums[right] <= nums[left] * k) {
            right++;
        }

        const removals = n - (right - left);
        result = Math.min(result, removals);
    }

    return result;
}

console.log(minRemoval([2, 1, 5], 2)); // 1
console.log(minRemoval([1, 6, 2, 9], 3)); // 2
console.log(minRemoval([4, 6], 2)); // 0
