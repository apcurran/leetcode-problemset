"use strict";

/**
 * solution 1 -- two pointers
 * time: O(s + t)
 * space: O(1)
 * 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function appendCharacters(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            tPointer++;
        } else {
            // still looking for sChar to match tChar
            sPointer++;
        }
    }

    return t.length - tPointer;
}

console.log(appendCharacters("coaching", "coding")); // 4
