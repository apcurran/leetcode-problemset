"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @return {number}
 */
function minChanges(s) {
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[left] !== s[right]) {
            // odd index right pointer, make change
            if (right % 2 === 1) {
                result++;
            }

            // move left pointer forwards
            left = right;
        }
    }

    return result;
}

console.log(minChanges("1001")); // 2
console.log(minChanges("10")); // 1
