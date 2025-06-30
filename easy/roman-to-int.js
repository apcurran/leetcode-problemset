"use strict";

/**
 * solution 1 -- map obj
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number}
 */
function romanToInt(str) {
    const romanNumerals = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let resVal = 0;

    for (let i = 0; i < str.length; i++) {
        const currRomanNumeral = str[i];
        const nextRomanNumeral = str[i + 1];
        const isNextInBounds = i + 1 < str.length;

        if (
            isNextInBounds &&
            romanNumerals.get(currRomanNumeral) <
                romanNumerals.get(nextRomanNumeral)
        ) {
            // subtract vals
            resVal -= romanNumerals.get(currRomanNumeral);
        } else {
            // add vals
            resVal += romanNumerals.get(currRomanNumeral);
        }
    }

    return resVal;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("MCMXCIV")); // 1994
