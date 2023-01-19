"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} letters
 * @return {string}
 */
function greatestLetter(letters) {
    let uniqueLetters = new Set(letters);
    let maxLetter = "";

    for (let letter of letters) {
        const lowercaseLetter = letter.toLowerCase();
        const uppercaseLetter = letter.toUpperCase();

        if (!uniqueLetters.has(lowercaseLetter) || !uniqueLetters.has(uppercaseLetter)) {
            continue;
        }

        // if letter in lowercase and uppercase sets,
        const letterCharCode = letter.charCodeAt(0);
        // check letter's charCode,
        if (letterCharCode > maxLetter.charCodeAt(0) || maxLetter === "") {
            // if this letter's charCode is greater than previous max, replace
            maxLetter = letter;
        }
    }

    return maxLetter.toUpperCase();
}

console.log( greatestLetter("lEeTcOdE") ); // "E"
console.log( greatestLetter("arRAzFif") ); // "R"
