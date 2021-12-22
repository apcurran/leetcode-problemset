"use strict";

/**
 * @param {string} str
 * @param {number[]} indices
 * @return {string}
 */
function restoreString(str, indices) {
    let resStrArr = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = indices[i];
        resStrArr[index] = char;
    }

    return resStrArr.join("");
}

console.log( restoreString("codeleet", [4,5,6,7,0,2,1,3]) ); // "leetcode"
console.log( restoreString("abc", [0,1,2]) ); // "abc"
