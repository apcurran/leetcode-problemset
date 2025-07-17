"use strict";

// /**
//  * solution 1 -- regex
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {string} word
//  * @return {boolean}
//  */
// function isValid(word) {
//     if (word.length < 3) return false;

//     const regex = /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwxyz])[a-z0-9]+$/gi;

//     return regex.test(word);
// }

/**
 * solution 2 -- one-pass
 * time: O(n)
 * space: O(1)
 *
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
    if (word.length < 3) return false;

    const isAlpha = /[a-z]/i;
    const isNum = /[0-9]/;
    let hasVowel = false;
    let hasConsonant = false;

    for (let char of word) {
        if (isNum.test(char)) continue;

        if (!isAlpha.test(char)) return false;

        const c = char.toLowerCase();

        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
            hasVowel = true;
        } else {
            hasConsonant = true;
        }
    }

    return hasVowel && hasConsonant;
}

console.log(isValid("234Adas")); // true
console.log(isValid("b3")); // false
console.log(isValid("a3$e")); // false
console.log(isValid("UuE6")); // false
