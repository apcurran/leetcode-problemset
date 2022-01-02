"use strict";

/**
 * Solution 1
 * 
 * n = sentences arr
 * m = individual sentence arr
 * 
 * Time: O(n * m)
 * Space: O(m)
 * 
 * @param {string[]} sentences
 * @return {number}
 */
function mostWordsFound(sentences) {
    let wordCount = 0;

    for (let sentence of sentences) {
        const sentenceWordCount = sentence.split(" ").length;

        if (sentenceWordCount > wordCount) {
            wordCount = sentenceWordCount;
        }
    }

    return wordCount;
}

console.log( mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]) ); // 6
console.log( mostWordsFound(["please wait", "continue to fight", "continue to win"]) ); // 3
