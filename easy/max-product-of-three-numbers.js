/**
 * solution 1 -- sort
 * time: O(n * log n) -- due to array.sort()
 * space: O(n) -- due to array.sort()
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct(nums) {
    nums.sort(function sortDesc(a, b) {
        return b - a;
    });

    // first 3 largest nums
    let productA = nums[0] * nums[1] * nums[2];
    // largest num and two smallest (negatives multiplied create positive value)
    let productB = nums[0] * nums.at(-2) * nums.at(-1);

    return Math.max(productA, productB);
}

console.log(maximumProduct([1, 2, 3])); // 6
console.log(maximumProduct([1, 2, 3, 4])); // 24
console.log(maximumProduct([-1, -2, -3])); // -6
console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); // 39_200
