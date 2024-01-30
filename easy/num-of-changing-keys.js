"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function countKeyChanges(str) {
    let changesCount = 0;

    for (let i = 0; i < str.length - 1; i++) {
        const currentChar = str[i].toUpperCase();
        const nextChar = str[i + 1].toUpperCase();

        if (currentChar !== nextChar) changesCount++; 
    }

    return changesCount;
}

console.log(countKeyChanges("aAbBcC")); // 2
console.log(countKeyChanges("AaAaAaaA")); // 0
