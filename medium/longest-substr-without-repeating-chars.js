"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
    let globalLargestCharCount = 0;

    for (let i = 0; i < str.length; i++) {
        // for each substr create an empty set
        // store new chars in substr set
        let subStrSet = new Set();

        for (let j = i; j < str.length; j++) {
            const innerChar = str[j];

            if (!subStrSet.has(innerChar)) {
                subStrSet.add(innerChar);
                continue;
            }

            // otherwise, char is repeated in substr
            break;
        }

        const subStrCount = subStrSet.size;
        globalLargestCharCount = Math.max(globalLargestCharCount, subStrCount);
    }

    return globalLargestCharCount;
}

console.log( lengthOfLongestSubstring("abcabcbb") ); // 3
console.log( lengthOfLongestSubstring("bbbbb") ); // 1
console.log( lengthOfLongestSubstring("pwwkew") ); // 3
