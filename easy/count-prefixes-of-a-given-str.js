"use strict";

// /**
//  * solution 1
//  * n = words length
//  * m = current word length
//  * time: O(n * m)
//  * space: O(m)
//  * 
//  * @param {string[]} words
//  * @param {string} s
//  * @return {number}
//  */
// function countPrefixes(words, s) {
//     let totalValidPrefixes = 0;
    
//     for (let i = 0; i < words.length; i++) {
//         const currentWord = words[i];
//         const prefixTest = s.slice(0, currentWord.length);

//         if (currentWord === prefixTest) totalValidPrefixes++;
//     }

//     return totalValidPrefixes;
// }

/**
 * solution 2
 * n = words length
 * m = current word length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
function countPrefixes(words, s) {
    let totalValidPrefixes = 0;
    
    wordsLoop: for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        
        for (let j = 0; j < currentWord.length; j++) {
            if (currentWord[j] !== s[j]) {
                continue wordsLoop;
            }
        }

        totalValidPrefixes++;
    }

    return totalValidPrefixes;
}
//                          +1           +1        +1
console.log( countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc") ); // 3
