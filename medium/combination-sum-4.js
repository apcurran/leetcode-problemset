/**
 * solution 1 -- dynamic programming, bottom up
 * time: O(n * t)
 * space: O(t)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function combinationSum4(nums, target) {
    let dpCache = new Map([[0, 1]]);

    for (let total = 1; total <= target; total++) {
        dpCache.set(total, 0);

        for (let num of nums) {
            const totalValue = dpCache.get(total);
            const remainingAmount = dpCache.get(total - num) || 0;
            const sum = totalValue + remainingAmount;
            dpCache.set(total, sum);
        }
    }

    return dpCache.get(target);
}

console.log(combinationSum4([1, 2, 3], 4)); // 7
