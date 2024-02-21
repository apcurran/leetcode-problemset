"use strict";

/**
 * solution 1 -- sort vowels
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function sortVowels(str) {
    let tempVowels = [];

    for (let char of str) {
        if (isVowel(char)) {
            tempVowels.push(char);
        }
    }

    tempVowels.sort(function sortByASCIIAscOrder(a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    });

    let vowelPointer = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (isVowel(currentChar)) {
            // add temp vowel to solution
            result += tempVowels[vowelPointer];
            // increment vowel pointer to point at the next vowel in the list
            vowelPointer++;
        } else {
            // add consonant to solution
            result += currentChar;
        }
    }
    
    return result;
}

/**
 * @param {string} char 
 * @returns {boolean}
 */
function isVowel(char) {
    return char === "a" || char === "A" ||
           char === "e" || char === "E" ||
           char === "i" || char === "I" ||
           char === "o" || char === "O" ||
           char === "u" || char === "U";
}

console.log(sortVowels("lEetcOde")); // "lEOtcede"
