"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @param {number[]} spaces
 * @return {string}
 */
function addSpaces(str, spaces) {
    let strPointer = 0;
    let spacesPointer = 0;
    let results = [];

    while (strPointer < str.length && spacesPointer < spaces.length) {
        if (strPointer < spaces[spacesPointer]) {
            // current char
            results.push(str[strPointer]);
            strPointer++;
        } else {
            // we reached a space addition
            results.push(" ");
            spacesPointer++;
        }
    }

    if (strPointer < str.length) {
        // add the rest of the word
        results.push(str.slice(strPointer));
    }

    return results.join("");
}

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15])); // "Leetcode Helps Me Learn"
