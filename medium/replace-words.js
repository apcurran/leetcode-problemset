"use strict";

/**
 * solution 1 -- hashset
 * time: O(s * d * w^2)
 * space: O(s + d + w)
 * 
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dictionary, sentence) {
    let words = sentence.split(" ");
    const uniqueWords = new Set(dictionary);

    // replace word in sentence with the shortest root possible
    for (let i = 0; i < words.length; i++) {
        const shortestRoot = getShortestRootWord(words[i], uniqueWords);
        words[i] = shortestRoot;
    }

    return words.join(" ");
}

/**
 * @param {string} currentWord 
 * @param {Set} uniqueWords 
 * @returns {string}
 */
function getShortestRootWord(currentWord, uniqueWords) {
    let shortestRoot = currentWord; // default to currentWord as worst case scenario

    for (let i = 1; i <= currentWord.length; i++) {
        const wordRoot = currentWord.slice(0, i);

        if (uniqueWords.has(wordRoot)) {
            shortestRoot = wordRoot;

            break;
        }
    }

    return shortestRoot;
}

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));
// "the cat was rat by the bat"
