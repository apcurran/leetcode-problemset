"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
function minBitFlips(start, goal) {
    let XORValue = start ^ goal;
    let minFlipsCount = 0;

    while (XORValue > 0) {
        XORValue = XORValue & (XORValue - 1);
        minFlipsCount++;
    }

    return minFlipsCount;
}

console.log(minBitFlips(10, 7)); // 3
