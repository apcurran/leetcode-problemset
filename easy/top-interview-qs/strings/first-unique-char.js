"use strict";

/**
 * Solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function firstUniqChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let isRepeated = false;

        for (let j = 0; j < str.length; j++) {
            const nextChar = str[j];

            if (nextChar === char && i !== j) {
                isRepeated = true;
            }
        }

        if (!isRepeated) return i;
    }

    // No char is non-repeating
    return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("dddccdbba")); // 8