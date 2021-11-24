"use strict";

/**
 * O(log n)
 * @param {number[]} numsArr
 * @param {number} target
 * @return {number}
 */
function search(numsArr, target) {
    let start = 0;
    let end = numsArr.length - 1;
    
    while (start <= end) {
        const middleIndex = Math.floor((start + end) / 2);
        const potentialMatch = numsArr[middleIndex];

        if (potentialMatch === target) {
            return middleIndex;
        } else if (potentialMatch < target) {
            start = middleIndex + 1;
        } else {
            end = middleIndex - 1;
        }
    }

    // No matches
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1