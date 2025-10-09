/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function alternatingSum(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (i % 2 === 0) {
            sum += value;
        } else {
            sum -= value;
        }
    }

    return sum;
}

console.log(alternatingSum([1, 3, 5, 7])); // -4
console.log(alternatingSum([100])); // 100
