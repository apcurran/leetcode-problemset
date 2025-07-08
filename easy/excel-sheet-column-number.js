"use strict";

/**
 * solution 1 -- base-26 conversion of letters
 * time: O(n)
 * space: O(1)
 *
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle) {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
        const base26Conversion = result * 26 + charValue;
        result = base26Conversion;
    }

    return result;
}

console.log(titleToNumber("AB")); // 28
