/**
 * solution 1 -- hash set
 * time: O(n)
 * space: O(n) -- hash set
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function missingMultiple(nums, k) {
    const seenValues = new Set(nums);
    let result = k;

    while (seenValues.has(result)) {
        result += k;
    }

    return result;
}

console.log(missingMultiple([8, 2, 3, 4, 6], 2)); // 10
console.log(missingMultiple([1, 4, 7, 10, 15], 5)); // 5
