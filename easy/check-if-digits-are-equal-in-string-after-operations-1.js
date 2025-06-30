"use strict";

/**
 * solution 1 -- direct simluation
 * time: O(n * log n)
 * space: O(log n)
 *
 * @param {string} s
 * @return {boolean}
 */
function hasSameDigits(s) {
    while (s.length > 2) {
        let revisedS = "";

        // iterate s, adding digits and modding them
        for (let i = 0; i < s.length - 1; i++) {
            const digit1 = s[i];
            const digit2 = s[i + 1];
            const revisedDigit = (Number(digit1) + Number(digit2)) % 10;
            revisedS += revisedDigit;
        }

        s = revisedS;
    }

    return s[0] === s[1];
}

console.log(hasSameDigits("3902")); // true ("11")
console.log(hasSameDigits("34789")); // false ("48")
