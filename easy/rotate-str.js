"use strict";

/**
 * solution 1
 * time: O(n^2) -- array.shift() inside of loop
 * space: O(n)
 *
 * @param {string} str
 * @param {string} goalStr
 * @return {boolean}
 */
function rotateString(str, goalStr) {
    if (str === goalStr) return true;

    let strCharArr = [...str];

    for (let i = 0; i < str.length; i++) {
        const firstLetter = strCharArr.shift();
        strCharArr.push(firstLetter);

        if (strCharArr.join("") === goalStr) return true;
    }

    return false;
}

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
