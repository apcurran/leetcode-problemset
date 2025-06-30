"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 *
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
    let deleteCount = 0;

    for (let col = 0; col < strs[0].length; col++) {
        for (let row = 0; row < strs.length - 1; row++) {
            if (strs[row][col] > strs[row + 1][col]) {
                deleteCount++;

                break;
            }
        }
    }

    return deleteCount;
}

console.log(minDeletionSize(["cba", "daf", "ghi"])); // 1
// c b a
// d a f
// g h i
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // 3
