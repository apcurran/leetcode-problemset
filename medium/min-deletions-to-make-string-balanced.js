"use strict";

/**
 * solution 1 -- two-pass
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function minimumDeletions(str) {
    let aCountRight = new Array(str.length).fill(0);
    let aCount = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        aCountRight[i] = aCount;
        
        if (str[i] === "a") {
            aCount++;
        }
    }

    let bCountRight = 0;
    let minDeletions = str.length;

    for (let i = 0; i < str.length; i++) {
        const deletions = aCountRight[i] + bCountRight;
        minDeletions = Math.min(minDeletions, deletions);

        if (str[i] === "b") {
            bCountRight++;
        }
    }

    return minDeletions;
}

console.log(minimumDeletions("aababbab")); // 2
console.log(minimumDeletions("bbaaaaabb")); // 2
