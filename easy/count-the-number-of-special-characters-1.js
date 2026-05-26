// /**
//  * solution 1 -- map
//  * time: O(n^2) - string.includes() nested inside of for loop
//  * space: O(n)
//  *
//  * @param {string} word
//  * @return {number}
//  */
// function numberOfSpecialChars(word) {
//     let isLowerAndUpperChar = new Map();

//     for (let char of word) {
//         if (char.toLowerCase() === char) {
//             // if lowercase letter,
//             // check if uppercase version exists,
//             // if so, add true to letter in map
//             if (word.includes(char.toUpperCase())) {
//                 isLowerAndUpperChar.set(char, true);
//             }
//         }
//     }

//     return isLowerAndUpperChar.size;
// }

/**
 * solution 2 -- set
 * time: O(n)
 * space: O(u) -- 52 unique chars max
 *
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word) {
    const aCharCodeLower = 97;
    const aCharCodeUpper = 65;
    let charSet = new Set(word);
    let specialCharsCount = 0;

    for (let i = 0; i < 26; i++) {
        const lowerChar = String.fromCharCode(aCharCodeLower + i);
        const upperChar = String.fromCharCode(aCharCodeUpper + i);

        if (charSet.has(lowerChar) && charSet.has(upperChar)) {
            specialCharsCount++;
        }
    }

    return specialCharsCount;
}

console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("abBCab")); // 1
