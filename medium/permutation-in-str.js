"use strict";

// /**
//  * solution 1 -- sort strings (barely passes)
//  * n = s1
//  * m = s2
//  * time: O( m * (n * log(n)) )
//  * space: O( n )
//  * 
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// function checkInclusion(s1, s2) {
//     const sortedS1 = getSortedStr(s1);

//     for (let i = 0; i < s2.length - s1.length + 1; i++) {
//         const sortedS2Chunk = getSortedStr(s2.slice(i, i + s1.length));

//         if (sortedS2Chunk === sortedS1) return true;
//     }

//     return false;
// }

// /**
//  * @param {string} str 
//  * @returns {string}
//  */
// function getSortedStr(str) {
//     return str
//             .split("")
//             .sort()
//             .join("");
// }

/**
 * solution 2 -- hashmaps
 * n = s1
 * m = s2
 * time: O(n)
 * space: O(1) -- hashmap contains 26 chars at most
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    // get s1 char counts
    let s1CharCounts = new Map();

    for (let char of s1) {
        const previousCharCount = s1CharCounts.get(char) || 0;
        s1CharCounts.set(char, previousCharCount + 1);
    }

    // get s2 "chunk" char counts
    // compare str chunks for char counts equality
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let s2ChunkCharCounts = new Map();

        for (let j = 0; j < s1.length; j++) {
            const char = s2[i + j];
            const previousCharCount = s2ChunkCharCounts.get(char) || 0;
            s2ChunkCharCounts.set(char, previousCharCount + 1);

            if (charCountsMatch(s1CharCounts, s2ChunkCharCounts)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * @param {Map} s1Map 
 * @param {Map} s2Map 
 * @returns {boolean}
 */
function charCountsMatch(s1Map, s2Map) {
    for (let [s1Char, s1CharCount] of s1Map) {
        const s2CharCount = s2Map.get(s1Char);

        if (!s2CharCount) {
            return false;
        }

        const charCountsDiff = s1CharCount - s2CharCount;

        if (charCountsDiff !== 0) {
            return false;
        }
    }

    return true;
}

console.log(checkInclusion("ba", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda")); // true
