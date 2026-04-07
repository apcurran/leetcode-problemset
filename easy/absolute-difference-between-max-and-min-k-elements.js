/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function absDifference(nums, k) {
    nums.sort(function sortDesc(a, b) {
        return b - a;
    });

    const kLargestElemsSum = nums.slice(0, k).reduce((sum, curr) => sum + curr, 0);
    const kSmallestElemsSum = nums.slice(nums.length - k).reduce((sum, curr) => sum + curr, 0);

    return Math.abs(kLargestElemsSum - kSmallestElemsSum);
}

console.log(absDifference([5, 2, 2, 4], 2)); // 5
console.log(absDifference([100], 1)); // 0
