"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number}
 */
function reverseDegree(str) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        const reversedAlphaIndex = 26 - (str.charCodeAt(i) - 97);
        const oneIndexedPosition = i + 1;
        const charDegree = oneIndexedPosition * reversedAlphaIndex;
        sum += charDegree;
    }

    return sum;
}

console.log(reverseDegree("abc")); // 148
