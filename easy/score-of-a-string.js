"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @return {number}
 */
function scoreOfString(s) {
    let score = 0;

    for (let i = 1; i < s.length; i++) {
        const previousCharCode = s.charCodeAt(i - 1);
        const currentCharCode = s.charCodeAt(i);
        const absDifference = Math.abs(previousCharCode - currentCharCode);
        score += absDifference;
    }

    return score;
}

console.log(scoreOfString("hello")); // 13
