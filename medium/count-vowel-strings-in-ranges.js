"use strict";

// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(q * w)
//  * space: O(1) -- not including results
//  * 
//  * @param {string[]} words
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// function vowelStrings(words, queries) {
//     const VOWELS = "aeiou";
//     let results = [];

//     for (let [startRange, endRange] of queries) {
//         let counter = 0;

//         for (let i = startRange; i <= endRange; i++) {
//             const currentWord = words[i];
//             const wordFirstChar = currentWord[0];
//             const wordLastChar = currentWord[currentWord.length - 1];
            
//             // check that start and end of word is a vowel (aeiou)
//             if (!VOWELS.includes(wordFirstChar) || !VOWELS.includes(wordLastChar)) {
//                 continue;
//             }
//             // if word is in range and follows start/end with vowel, increment a counter
//             counter++;
//         }
//         // add counter total to results array
//         results.push(counter);
//     }

//     return results;
// }

/**
 * solution 2 -- prefix/suffix
 * time: O(q + w)
 * space: O(w)
 * 
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
function vowelStrings(words, queries) {
    const VOWELS = "aeiou";
    let prefixCount = new Array(words.length + 1).fill(0);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isVowel = 0;

        if (VOWELS.includes(word[0]) && VOWELS.includes(word[word.length - 1])) {
            isVowel = 1;
        }

        prefixCount[i + 1] = prefixCount[i] + isVowel;
    }

    let results = [];

    for (let i = 0; i < queries.length; i++) {
        const [queryStart, queryEnd] = queries[i];
        const validWordsInRange = prefixCount[queryEnd + 1] - prefixCount[queryStart];
        results.push(validWordsInRange);
    }
    
    return results;
}

console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]])); // [2, 3, 0]
console.log(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]])); // [3, 2, 1]
