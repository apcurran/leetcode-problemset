"use strict";

/**
 * solution 1
 * c = chunk length
 * time: O(n * c)
 * space: O(c) -- not including results array space
 * 
 * @param {string} str
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function divideString(str, k, fill) {
    let results = [];

    for (let i = 0; i < str.length; i += k) {
        let chunk = str.slice(i, i + k);

        if (chunk.length !== k) {
            chunk = chunk.padEnd(k, fill);
        }

        results.push(chunk);
    }

    return results;
}

console.log(divideString("abcdefghi", 3, "x")); // ["abc","def","ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc","def","ghi","jxx"]
