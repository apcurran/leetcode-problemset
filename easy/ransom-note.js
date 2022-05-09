"use strict";

/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    let ransomNoteCharMap = new Map();

    for (let char of ransomNote) {
        const prevVal = ransomNoteCharMap.get(char) || 0;
        ransomNoteCharMap.set(char, prevVal + 1);
    }

    let magazineCharMap = new Map();

    for (let char of magazine) {
        const prevVal = magazineCharMap.get(char) || 0;
        magazineCharMap.set(char, prevVal + 1);
    }

    // check if magazine str contains all chars with appropriate val counts to form ransomNote str
    for (let [char, charCount] of ransomNoteCharMap) {
        if (magazineCharMap.get(char) >= charCount) {
            continue;
        }

        return false;
    }

    return true;
}

console.log( canConstruct("aa", "ab") ); // false
console.log( canConstruct("a", "b") ); // false
console.log( canConstruct("aa", "aab") ); // true
