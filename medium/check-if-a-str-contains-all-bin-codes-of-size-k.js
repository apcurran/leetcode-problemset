"use strict";

/**
 * solution 1
 * time: O(n * k)
 * space: O(n * k)
 *
 * @param {string} str
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes(str, k) {
    const totalPossibleBinStrCombos = 2 ** k;
    let uniqueBinStrs = new Set();

    for (let i = 0; i < str.length - k + 1; i++) {
        const binStr = str.slice(i, i + k);
        uniqueBinStrs.add(binStr);
    }

    return uniqueBinStrs.size === totalPossibleBinStrCombos;
}

console.log(hasAllCodes("00110110", 2)); // true
