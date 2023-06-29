"use strict";

/**
 * solution 1 -- sort and compare
 * time: O((s * log s) + (t * log t))
 * space: O(s + t)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const sSorted = s
                        .split("")
                        .sort()
                        .join("");
    const tSorted = t
                        .split("")
                        .sort()
                        .join("");

    return sSorted === tSorted;
}

console.log( isAnagram("anagram", "nagaram") ); // true
console.log( isAnagram("rat", "car") ); // false
