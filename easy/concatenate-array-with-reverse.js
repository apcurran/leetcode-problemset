/**
 * solution 1 -- spread operator
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function concatWithReverse(nums) {
    return [...nums, ...nums.reverse()];
}

console.log(concatWithReverse([1, 2, 3])); // [1,2,3,3,2,1]
console.log(concatWithReverse([1])); // [1, 1]
