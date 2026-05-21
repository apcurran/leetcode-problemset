"use strict";

// /**
//  * solution 1 -- sort and compare
//  * time: O((s * log s) + (t * log t))
//  * space: O(s + t)
//  *
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// function isAnagram(s, t) {
//     const sSorted = s
//                         .split("")
//                         .sort()
//                         .join("");
//     const tSorted = t
//                         .split("")
//                         .sort()
//                         .join("");

//     return sSorted === tSorted;
// }

/**
 * solution 1 -- hashmap
 * time: O(s)
 * space: O(26) -> O(1) -- max of 26 alphabet chars
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let charsCounts = new Map();

    for (let char of s) {
        const previousCount = charsCounts.get(char) || 0;
        charsCounts.set(char, previousCount + 1);
    }

    for (let char of t) {
        const currCharCount = charsCounts.get(char);
        // character we don't already have OR char count ran out already
        if (!charsCounts.has(char) || currCharCount === 0) {
            return false;
        }

        charsCounts.set(char, currCharCount - 1); // decrement this char's frequency
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
