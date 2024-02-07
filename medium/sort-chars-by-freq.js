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
        const previousCharFreq = charsMap.get(char) || 0;
        charsMap.set(char, previousCharFreq + 1);
    }

    // sort char tuples by frequency
    const sortedCharTuples = [...charsMap.entries()].sort((charA, charB) => charB[1] - charA[1]);
    // create a resStr with most freq to least freq chars in order
    let sortedChars = "";

    for (let [char, charFreq] of sortedCharTuples) {
        const charMiniStr = char.repeat(charFreq);
        sortedChars += charMiniStr;
    }

    return sortedChars;
}

console.log( frequencySort("tree") ); // "eetr" or "eert"
console.log( frequencySort("cccaaa") ); // "aaaccc" or "cccaaa"
console.log( frequencySort("Aabb") ); // "bbAa" or "bbaA"
