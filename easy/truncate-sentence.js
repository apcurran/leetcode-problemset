"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function truncateSentence(s, k) {
    return s
        .split(" ")
        .slice(0, k)
        .join(" "); 
}

console.log( truncateSentence("Hello how are you Contestant", 4) ); // "Hello how are you"
