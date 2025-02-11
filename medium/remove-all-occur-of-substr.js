"use strict";

/**
 * solution 1 -- recursive
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string} str
 * @param {string} part
 * @return {string}
 */
function removeOccurrences(str, part) {
    if (!str.includes(part)) return str;

    const partiallyRemoved = str.replace(part, "");

    return removeOccurrences(partiallyRemoved, part);
}

// /**
//  * solution 2 -- iterative
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @param {string} part
//  * @return {string}
//  */
// function removeOccurrences(str, part) {
//     while (str.includes(part)) {
//         str = str.replace(part, "");
//     }

//     return str;
// }

console.log( removeOccurrences("daabcbaabcbc", "abc") ); // "dab"
console.log( removeOccurrences("axxxxyyyyb", "xy") ); // "ab"
