"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function makeFancyString(str) {
    let strArr = [...str];

    for (let i = 0; i < strArr.length; i++) {
        const currLetter = strArr[i];

        if (strArr[i + 1] === currLetter && strArr[i + 2] === currLetter) {
            strArr[i] = "";
        }
    }

    return strArr.join("");
}

console.log( makeFancyString("leeetcode") ); // "leetcode"
console.log( makeFancyString("aaabaaaa") ); // "aabaa"
