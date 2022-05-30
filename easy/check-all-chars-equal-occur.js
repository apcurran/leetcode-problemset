"use strict";

/**
 * solution 1 -- cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {boolean}
 */
function areOccurrencesEqual(str) {
    // cache char and occur vals
    let charCache = new Map();

    for (let char of str) {
        const prevOccurCount = charCache.get(char) || 0;
        charCache.set(char, prevOccurCount + 1);
    }

    // iterate cache and check if curr val is same as others
    const idealCount = charCache
                        .entries()
                        .next()
                        .value[1];

    for (let occurCount of charCache.values()) {
        if (occurCount !== idealCount) return false;
    }

    return true;
}

console.log( areOccurrencesEqual("abacbc") ); // true
console.log( areOccurrencesEqual("aaabb") ); // false
