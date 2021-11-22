"use strict";

/**
 * 
 * @param {string[]} strsArr 
 * @returns {string}
 */
function longestCommonPrefix(strsArr) {
    let prefix = "";

    for (let i = 0; i < strsArr.length; i++) {
        if (strsArr[0] === "") return prefix;

        const char = strsArr[0][i]; // Chars of first str

        for (let j = 0; j < strsArr.length; j++) {
            if (strsArr[j][i] !== char) return prefix;
        }

        prefix += char;
    }

    return prefix;
}

// console.log( longestCommonPrefix(["flower","flow","flight"]) ); // "fl"
// console.log( longestCommonPrefix(["dog","racecar","car"]) ); // ""
console.log( longestCommonPrefix([""]) ); // ""