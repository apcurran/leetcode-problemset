"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string[]} words
 * @return {number}
 */
function maximumNumberOfStringPairs(words) {
    let pairsCount = 0;

    for (let i = 0; i < words.length; i++) {
        const firstWord = words[i];
        
        for (let j = i + 1; j < words.length; j++) {
            const secondWord = words[j];
            // technically constant time/space op since words[i] length is always 2
            const reversedSecondWord = reverseWord(secondWord);

            if (firstWord === reversedSecondWord) {
                pairsCount++;
            }
        }
    }

    return pairsCount;
}

/**
 * @param {string} str 
 * @returns {string}
 */
function reverseWord(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log( maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]) ); // 2
console.log( maximumNumberOfStringPairs(["ab", "ba", "cc"]) ); // 1
console.log( maximumNumberOfStringPairs(["aa", "ab"]) ); // 0
