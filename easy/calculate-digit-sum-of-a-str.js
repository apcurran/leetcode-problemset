"use strict";

/**
 * solution 1 -- recursion
 * time: O(n * k * log n)
 * space: O(log n)
 * 
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
function digitSum(str, k) {
    // base case
    if (str.length <= k) return str;

    let resultStr = "";
    // split up into chunks
    for (let i = 0; i < str.length; i += k) {
        let chunkTotal = 0;
        
        for (let j = i; j < i + k; j++) {
            const currentNumStr = str[j];

            if (currentNumStr === undefined) break;

            chunkTotal += Number(str[j]);
        }

        resultStr += String(chunkTotal);
    }

    return digitSum(resultStr, k);
}

console.log(digitSum("11111222223", 3)); // "135"
