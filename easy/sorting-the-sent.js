"use strict";

/**
 * Solution 1
 * time: O(n log n) -- due to sorting
 * space: O(n)
 * @param {string} sentence
 * @return {string}
 */
function sortSentence(sentence) {
    const wordsArr = sentence.split(" ");
    const wordNumRegex = /\d/;

    wordsArr.sort((word1, word2) => {
        const word1Num = Number(word1.match(wordNumRegex)[0]);
        const word2Num = Number(word2.match(wordNumRegex)[0]);

        return word1Num - word2Num;
    });

    const wordsSent = wordsArr.join(" ");

    return wordsSent.replace(/\d/g, "");
}

console.log(sortSentence("is2 sentence4 This1 a3")); // "This is a sentence"
