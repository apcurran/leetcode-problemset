"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function takeCharacters(s, k) {
    // get counts of all chars a - c
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;

    for (let char of s) {
        if (char === "a") {
            aCount++;
        } else if (char === "b") {
            bCount++;
        } else if (char === "c") {
            cCount++;
        }
    }

    if (Math.min(aCount, bCount, cCount) < k) {
        return -1; // not possible to get k of each char
    }

    let result = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === "a") {
            aCount--;
        } else if (s[right] === "b") {
            bCount--;
        } else if (s[right] === "c") {
            cCount--;
        }

        while (Math.min(aCount, bCount, cCount) < k) {
            // remove left char and add to count
            if (s[left] === "a") {
                aCount++;
            } else if (s[left] === "b") {
                bCount++;
            } else if (s[left] === "c") {
                cCount++;
            }

            left++;
        }

        // result is the min of result and s length - size of the window
        result = Math.min(result, s.length - (right - left + 1));
    }

    return result;
}

console.log(takeCharacters("aabaaaacaabc", 2)); // 8
