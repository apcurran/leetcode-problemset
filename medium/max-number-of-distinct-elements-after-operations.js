/**
 * solution 1 -- greedy
 * time: O(n * log n) -- sort
 * space: O(n) -- sort
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxDistinctElements(nums, k) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    let count = 0;
    let previous = -Infinity;
    // to max out count of distinct elems,
    // greedily choose the smallest value for each elem

    for (let num of nums) {
        const maxNumEndOfRange = num + k;
        const minNumBeginningOfRange = num - k;
        const smallestNonPrevNum = previous + 1;
        const smallestPossibleValue = Math.max(smallestNonPrevNum, minNumBeginningOfRange);
        const current = Math.min(smallestPossibleValue, maxNumEndOfRange);

        if (current > previous) {
            count++;
            previous = current; // update previous to be the current value
        }
    }

    return count;
}

console.log(maxDistinctElements([1, 2, 2, 3, 3, 4], 2)); // 6
console.log(maxDistinctElements([4, 4, 4, 4], 1)); // 3
