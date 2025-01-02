"use strict";

/**
 * solution 1 -- brute force (TLE)
 * time: O(q * w)
 * space: O(q)
 * 
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings(words, queries) {
    const VOWELS = "aeiou";
    let results = [];

    for (let [startRange, endRange] of queries) {
        let counter = 0;

        for (let i = startRange; i <= endRange; i++) {
            const currentWord = words[i];
            const wordFirstChar = currentWord[0];
            const wordLastChar = currentWord[currentWord.length - 1];
            
            // check that start and end of word is a vowel (aeiou)
            if (!VOWELS.includes(wordFirstChar) || !VOWELS.includes(wordLastChar)) {
                continue;
            }
            // if word is in range and follows start/end with vowel, increment a counter
            counter++;
        }
        // add counter total to results array
        results.push(counter);
    }

    return results;
}

console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); // [2, 3, 0]
console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); // [3, 2, 1]
