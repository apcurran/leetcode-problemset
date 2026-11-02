/**
 * solution 1
 * time: O(n)
 * space: O(n) -- array spread copy
 *
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
    const minVal = Math.min(...nums);
    let sum = 0;

    for (let num of nums) {
        const diff = num - minVal;
        sum += diff;
    }

    return sum;
}

console.log(minMoves([1, 2, 3])); // 3
console.log(minMoves([1, 1, 1])); // 0
