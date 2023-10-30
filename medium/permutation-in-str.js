"use strict";

/**
 * solution 1 -- sort strings (barely passes)
 * n = s1
 * m = s2
 * time: O( m * (n * log(n)) )
 * space: O( n )
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    const sortedS1 = getSortedStr(s1);
    
    for (let i = 0; i < s2.length - s1.length + 1; i++) {
        const sortedS2Chunk = getSortedStr(s2.slice(i, i + s1.length));

        if (sortedS2Chunk === sortedS1) return true;
    }

    return false;
}

/**
 * @param {string} str 
 * @returns {string}
 */
function getSortedStr(str) {
    return str
            .split("")
            .sort()
            .join("");
}

console.log( checkInclusion("ba", "eidbaooo") ); // true
console.log( checkInclusion("ab", "eidboaoo") ); // false
console.log( checkInclusion("adc", "dcda") ); // true
