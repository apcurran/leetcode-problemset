"use strict";

// /** Solution 1
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// function isAnagram(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("");
// }

/** Solution 2
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    const charMapS = getCharMap(s);
    const charMapT = getCharMap(t);
    const largestCharMap = charMapS.size > charMapT.size ? charMapS : charMapT;

    for (let key of largestCharMap.keys()) {
        if (charMapS.get(key) !== charMapT.get(key)) {
            return false;
        }
    }

    return true;
}

function getCharMap(str) {
    let charMap = new Map();

    for (let char of str) {
        const val = charMap.get(char) + 1 || 1;
        charMap.set(char, val);
    }

    return charMap;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false
