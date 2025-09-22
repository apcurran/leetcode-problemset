/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum % k;
}

console.log(minOperations([3, 9, 7], 5)); // 4
console.log(minOperations([4, 1, 3], 4)); // 0
console.log(minOperations([3, 2], 6)); // 5
