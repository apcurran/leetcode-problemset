/**
 * solution 1 -- sorting
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function minimumCost(nums) {
    const sorted = [nums[0], ...nums.slice(1).toSorted((a, b) => a - b)];

    return sorted[0] + sorted[1] + sorted[2];
}

console.log(minimumCost([1, 2, 3, 12])); // 6
console.log(minimumCost([10, 3, 1, 1])); // 12
