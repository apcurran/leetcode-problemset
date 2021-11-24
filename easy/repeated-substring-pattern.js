"use strict";

/**
 * O(n)
 * @param {string} str
 * @return {boolean}
 */
function repeatedSubstringPattern(str) {
    const strPlusStr = str + str;
    const splitNewStr = strPlusStr.split("");
    splitNewStr.pop();
    splitNewStr.shift();
    const joinedNewStr = splitNewStr.join("");

    return joinedNewStr.includes(str);
}

console.log( repeatedSubstringPattern("abab") ); // true -> It is the substring "ab" twice.
console.log( repeatedSubstringPattern("aba") ); // false