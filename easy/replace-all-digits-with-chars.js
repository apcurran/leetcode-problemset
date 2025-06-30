"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {string}
 */
function replaceDigits(str) {
    let chars = [...str];

    for (let i = 1; i < chars.length; i++) {
        const previousChar = chars[i - 1];
        const currentDigit = Number(chars[i]);

        // skip non-digits (chars)
        if (Number.isNaN(currentDigit)) continue;

        const replacementChar = shift(previousChar, currentDigit);
        chars[i] = replacementChar;
    }

    return chars.join("");
}

console.log(replaceDigits("a1b2c3d4e")); // "abbdcfdhe"

/**
 * @param {string} char
 * @param {number} digit
 * @returns {string} replacement char
 */
function shift(char, digit) {
    const charCode = char.charCodeAt(0);
    const replacementCharCode = charCode + digit;

    return String.fromCharCode(replacementCharCode);
}
