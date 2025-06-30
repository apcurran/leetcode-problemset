"use strict";

class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    encode(words) {
        let result = "";

        for (let word of words) {
            const charCount = word.length;
            const delimiter = ":";
            const encodedWord = charCount + delimiter + word;
            result += encodedWord;
        }

        return result;
    }

    /**
     * solution 1
     * n = total chars for all words combined
     * time: O(n)
     * space: O(n)
     *
     * @param {string} combinedWord
     * @returns {string[]}
     */
    decode(combinedWord) {
        let words = [];
        let i = 0;

        while (i < combinedWord.length) {
            // decode word
            let j = i;

            // once delimiter is hit
            while (combinedWord[j] !== ":") {
                j++;
            }
            // we now need the word length amount
            const wordLength = Number(combinedWord.slice(i, j));
            // obtain word by only slicing out the word without the delimiter or wordLength num included
            const currentDecodedWord = combinedWord.slice(
                j + 1,
                j + 1 + wordLength,
            );
            words.push(currentDecodedWord);
            // move i pointer forwards
            i = j + 1 + wordLength;
        }

        return words;
    }
}

const encoder = new Solution();
const encodedWord = encoder.encode(["neet", "code", "love", "you"]);
const decodedWords = encoder.decode(encodedWord);
console.log(decodedWords);
