/**
 * solution 1 -- map
 * time: O(n^2) - string.includes() nested inside of for loop
 * space: O(n)
 *
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word) {
    let isLowerAndUpperChar = new Map();

    for (let char of word) {
        if (char.toLowerCase() === char) {
            // if lowercase letter,
            // check if uppercase version exists,
            // if so, add true to letter in map
            if (word.includes(char.toUpperCase())) {
                isLowerAndUpperChar.set(char, true);
            }
        }
    }

    return isLowerAndUpperChar.size;
}

console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("abBCab")); // 1
