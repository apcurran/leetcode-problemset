/**
 * solution 1 -- sort
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximizeExpressionOfThree(nums) {
    nums.sort(function sortDesc(a, b) {
        return b - a;
    });

    // add two largest elems
    const a = nums[0];
    const b = nums[1];
    // sub one smallest elem
    const c = nums.at(-1);

    return a + b - c;
}

console.log(maximizeExpressionOfThree([1, 4, 2, 5])); // 8
console.log(maximizeExpressionOfThree([-2, 0, 5, -2, 4])); // 11
