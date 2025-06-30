"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} pref
 * @return {number[]}
 */
function findArray(pref) {
    let results = new Array(pref.length);
    results[0] = pref[0];

    for (let i = 1; i < pref.length; i++) {
        results[i] = pref[i] ^ pref[i - 1];
    }

    return results;
}

console.log(findArray([5, 2, 0, 3, 1])); // [5, 7, 2, 3, 2]
