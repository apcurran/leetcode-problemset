/**
 * solution 1 -- sort and iteration
 * time: O(n * log n) sort algo
 * space: O(n) sort algo
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxAlternatingSum(nums) {
    const n = nums.length;

    // re-assign vals to squared vals
    for (let i = 0; i < n; i++) {
        nums[i] *= nums[i];
    }

    // sort ASC
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });

    let score = 0;
    // iterate first half of nums list (smallest first)
    for (let i = 0; i < Math.floor(n / 2); i++) {
        score -= nums[i];
    }

    // iterate last half of nums list (larger vals)
    for (let i = Math.floor(n / 2); i < n; i++) {
        score += nums[i];
    }

    return score;
}

console.log(maxAlternatingSum([1, 2, 3])); // 12
console.log(maxAlternatingSum([1, -1, 2, -2, 3, -3])); // 16
