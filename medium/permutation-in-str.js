"use strict";

/**
 * solution 1 -- sort strings
 * time: O(n * m * log m)
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    // check for equal strings after sorting -- similar to an anagram check
    const s1Length = s1.length;
    const sortedS1 = s1
                        .split("")
                        .sort()
                        .join("");

    
    for (let i = 0; i < s2.length - s1Length + 1; i++) {
        const sortedS2Chunk = s2
                                .slice(i, i + s1Length)
                                .split("")
                                .sort()
                                .join("");

        if (sortedS2Chunk === sortedS1) return true;
    }

    return false;
}

console.log( checkInclusion("ba", "eidbaooo") ); // true
console.log( checkInclusion("ab", "eidboaoo") ); // false
console.log( checkInclusion("adc", "dcda") ); // true
