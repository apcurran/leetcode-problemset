/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
    let totalMoves = 0;
    let maxNum = -Infinity;

    for (let num of nums) {
        maxNum = Math.max(maxNum, num);
    }

    for (let num of nums) {
        const diff = maxNum - num;
        totalMoves += diff;
    }

    return totalMoves;
}

console.log(minMoves([2, 1, 3])); // 3
console.log(minMoves([4, 4, 5])); // 2
