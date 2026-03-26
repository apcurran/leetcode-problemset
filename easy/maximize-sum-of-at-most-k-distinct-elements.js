/**
 * solution 1 -- sorting
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxKDistinct(nums, k) {
    const distinctNums = new Set(nums);
    const descendingNumsList = [...distinctNums].sort(function sortDesc(a, b) {
        return b - a;
    });

    return descendingNumsList.slice(0, k);
}

console.log(maxKDistinct([84, 93, 100, 77, 90], 3)); // [100, 93, 90]
console.log(maxKDistinct([84, 93, 100, 77, 93], 3)); // [100, 93, 84]
console.log(maxKDistinct([1, 1, 1, 2, 2, 2], 6)); // [2, 1]
