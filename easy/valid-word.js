"use strict";

/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 *
 * @param {string} word
 * @return {boolean}
 */
function isValid(word) {
    if (word.length < 3) return false;

    const regex = /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwxyz])[a-z0-9]+$/gi;

    return regex.test(word);
}

console.log(isValid("234Adas")); // true
console.log(isValid("b3")); // false
console.log(isValid("a3$e")); // false
