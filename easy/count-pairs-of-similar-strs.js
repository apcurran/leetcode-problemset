"use strict";

/**
 * solution 1
 *
 * @param {string[]} words
 * @return {number}
 */
function similarPairs(words) {
    let similarPairsCount = 0;

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const currentWordUniqueLetters = new Set([...currentWord]);

        followingWordsLoop: for (let j = i + 1; j < words.length; j++) {
            const followingWord = words[j];
            const followingWordUniqueLetters = new Set([...followingWord]);
            // iterate Set currentWord
            for (let letter of currentWordUniqueLetters) {
                if (!followingWordUniqueLetters.has(letter)) {
                    continue followingWordsLoop;
                }
            }

            // iterate Set followingWord
            for (let letter of followingWordUniqueLetters) {
                if (!currentWordUniqueLetters.has(letter)) {
                    continue followingWordsLoop;
                }
            }

            // successful match
            similarPairsCount++;
        }
    }

    return similarPairsCount;
}

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
console.log(similarPairs(["aabb", "ab", "ba"])); // 3
console.log(similarPairs(["nba", "cba", "dba"])); // 0
