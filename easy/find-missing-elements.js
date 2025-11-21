/**
 * solution 1
 * time: O(n^2)
 * space: O(1) -- not including results array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function findMissingElements(nums) {
    let min = Infinity;
    let max = -Infinity;

    for (let num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    let results = [];

    for (let current = min; current <= max; current++) {
        if (!nums.includes(current)) {
            results.push(current);
        }
    }

    return results;
}

console.log(findMissingElements([1, 4, 2, 5])); // [3]
console.log(findMissingElements([7, 8, 6, 9])); // []
console.log(findMissingElements([5, 1])); // [2, 3, 4]
