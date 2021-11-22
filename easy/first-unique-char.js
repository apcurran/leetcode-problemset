"use strict";

/**
 * @param {string} str
 * @return {number}
 */
function firstUniqChar(str) {
    let charsMap = new Map();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if char already exists.
        const potentialPreexistingChar = charsMap.get(char);
        
        // If it exists, increment it.
        if (potentialPreexistingChar !== undefined) {
            const incrementedCharCount = potentialPreexistingChar + 1;
            charsMap.set(char, incrementedCharCount);
            
            continue;
        }
        
        // Otherwise, create new char val in map.
        charsMap.set(char, 1);
    }

    // Loop through map and return first char with a 1 val
    const charsArr = [...charsMap];

    for (let i = 0; i < charsArr.length; i++) {
        if (charsArr[i][1] === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
console.log(firstUniqChar("dddccdbba")); // 8