"use strict";

/**
 * solution 1
 * time: O(s * log (s))
 * space: O(s)
 * 
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
    let results = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        results[i] = s[i];
    }

    results.sort(function sortByOrderIndices(char1, char2) {
        return order.indexOf(char1) - order.indexOf(char2);
    });
    
    return results.join("");
}

console.log(customSortString("cba", "abcd")); // "cbad" or "dcba" or "cbda"
