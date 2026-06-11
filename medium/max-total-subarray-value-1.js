/**
 * solution 1 - greedy
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxTotalValue(nums, k) {
    let globalMin = Infinity;
    let globalMax = -Infinity;

    for (let num of nums) {
        globalMin = Math.min(globalMin, num);
        globalMax = Math.max(globalMax, num);
    }

    const bestValue = globalMax - globalMin;

    return k * bestValue;
}

console.log(maxTotalValue([1, 3, 2], 2)); // 4
console.log(maxTotalValue([4, 2, 5, 1], 3)); // 12
