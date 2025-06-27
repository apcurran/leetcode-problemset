"use strict";

/**
 * solution 1 -- iterative
 * n = wordArr len
 * m = word len
 * time: O(n * m)
 * space: O(min(m))
 * 
 * @param {string[]} strsArr 
 * @returns {string}
 */
function longestCommonPrefix(strsArr) {
    let prefix = "";

    // iterate all chars of first word
    for (let i = 0; i < strsArr[0].length; i++) {
        if (strsArr[0] === "") return prefix;
        
        const firstWordChar = strsArr[0][i];
        // iterate all words in strsArr
        for (let word of strsArr) {
            const wordChar = word[i];

            if (i === word.length || wordChar !== firstWordChar) {
                return prefix;
            }
        }

        prefix += firstWordChar;
    }

    return prefix;
}

console.log( longestCommonPrefix(["flower", "flow", "flight"]) ); // "fl"
console.log( longestCommonPrefix(["dog", "racecar", "car"]) ); // ""
console.log( longestCommonPrefix([""]) ); // ""
