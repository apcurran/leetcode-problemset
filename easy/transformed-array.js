/**
 * solution 1 -- iteration
 * time: O(n)
 * space: O(1) -- not counting obligatory result arr space
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function constructTransformedArray(nums) {
    const n = nums.length;
    let results = Array.from({ length: n });

    for (let i = 0; i < n; i++) {
        results[i] = nums[(((i + nums[i]) % n) + n) % n];
    }

    return results;
}

console.log(constructTransformedArray([3, -2, 1, 1])); // [1, 1, 1, 3]
console.log(constructTransformedArray([-1, 4, -1])); // [-1, -1, 4]
