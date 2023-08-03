"use strict";

/**
 * solution 1 -- backtracking
 * time: O(n * 4^n)
 * space: O(n)
 * 
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    let results = [];

    if (digits === "") return results;

    const digitToChars = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "qprs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);

    /**
     * @param {number} i 
     * @param {string} currentStr 
     * @returns {void} -- side-effect with results from letterCombinations func
     */
    function backtrack(i, currentStr) {
        if (currentStr.length === digits.length) {
            results.push(currentStr);

            return;
        }

        const currentChars = digitToChars.get(digits[i]);

        for (let char of currentChars) {
            backtrack(i + 1, currentStr + char);
        }
    }

    backtrack(0, "");

    return results;
}

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
