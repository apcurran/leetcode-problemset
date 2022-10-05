"use strict";

/**
 * solution 1 -- two pointer
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }

        // tPointer will ALWAYS incr
        tPointer++;
    }

    // did the sPointer make it to the end of the str s?
    return sPointer === s.length;
}

console.log( isSubsequence("abc", "ahbgdc") ); // true
console.log( isSubsequence("axc", "ahbgdc") ); // false
console.log( isSubsequence("acb", "ahbgdc") ); // false
console.log( isSubsequence("aaaaaa", "bbaaaa") ); // false
