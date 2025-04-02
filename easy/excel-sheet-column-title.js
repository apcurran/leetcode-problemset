"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
    let results = [];

    while (columnNumber > 0) {
        columnNumber--;
        const offset = columnNumber % 26;
        const char = String.fromCharCode("A".charCodeAt(0) + offset);
        results.push(char);
        columnNumber = Math.floor(columnNumber / 26);
    }

    return results
        .reverse()
        .join("");
}

console.log(convertToTitle(28)); // "AB"
