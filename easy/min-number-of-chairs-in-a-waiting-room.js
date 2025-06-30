"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function minimumChairs(s) {
    let enterCount = 0;
    let maxEnterCount = 0;

    for (let char of s) {
        if (char === "E") {
            enterCount++;
            maxEnterCount = Math.max(maxEnterCount, enterCount);
        } else {
            enterCount--;
        }
    }

    return maxEnterCount;
}

console.log(minimumChairs("EEEEEEE")); // 7
console.log(minimumChairs("ELELEEL")); // 2
console.log(minimumChairs("ELEELEELLL")); // 3
