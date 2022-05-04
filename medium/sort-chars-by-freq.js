"use strict";

/**
 * n = number of chars in str
 * m = frequency count of letter
 * 
 * solution 1 -- cache
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function frequencySort(str) {
    let charsMap = new Map();
    // iterate str
    for (let char of str) {
        // cache chars in map for char -> freqVal
        if (!charsMap.has(char)) {
            // store new char
            charsMap.set(char, 1);
        } else {
            // incr freqVal
            const prevFreqVal = charsMap.get(char);
            charsMap.set(char, prevFreqVal + 1);
        }
    }

    // sort map by freqVal
    const sortedCharsTupleArr = [...charsMap.entries()].sort((a, b) => b[1] - a[1]);
    // create a resStr with most freq to least freq chars in order
    let resStr = "";

    for (let [char, freqVal] of sortedCharsTupleArr) {
        const charMiniStr = char.repeat(freqVal);
        resStr += charMiniStr;
    }

    return resStr;
}

console.log( frequencySort("tree") ); // "eetr" or "eert"
console.log( frequencySort("cccaaa") ); // "aaaccc" or "cccaaa"
console.log( frequencySort("Aabb") ); // "bbAa" or "bbaA"
