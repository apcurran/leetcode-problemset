"use strict";

/**
 * solution 1 -- Set
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function repeatedCharacter(str) {
    let charSet = new Set();

    for (let char of str) {
        if (charSet.has(char)) return char;

        charSet.add(char);
    }
}

console.log( repeatedCharacter("abccbaacz") );
