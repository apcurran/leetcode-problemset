"use strict";

/**
 * solution 1
 * n = len of wordsArr
 * m = len of individual word
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} title
 * @return {string}
 */
function capitalizeTitle(title) {
    // split words into arr
    const wordsArr = title.split(" ");
    let resStrArr = [];

    // iterate word arr
    for (let word of wordsArr) {
        // for each word, check len
        if (word.length < 3) {
            // if len is fewer than 3, lowercase all chars
            const loweredWord = word.toLowerCase();
            resStrArr.push(loweredWord);
        } else {
            // else cap first letter of word and then lower all others
            const casedWord =
                word[0].toUpperCase() + word.slice(1).toLowerCase();
            // add word to resStrArr
            resStrArr.push(casedWord);
        }
    }

    return resStrArr.join(" ");
}

console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR Of EACH Word")); // "First Letter of Each Word"
