"use strict";

/**
 * solution 1 -- nested for loops
 * n = len of wordArr
 * m = len of word in wordArr
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {string} str
 * @return {string}
 */
function reverseWords(str) {
    let resStrArr = [];
    let wordArr = str.split(" ");

    for (let word of wordArr) {
        // reverse loop -> start at end chars of word
        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
            const currChar = word[i];
            reversedWord += currChar;
        }

        resStrArr.push(reversedWord);
    }

    return resStrArr.join(" ");
}

console.log( reverseWords("Let's take LeetCode contest") ); // "s'teL ekat edoCteeL tsetnoc"
console.log( reverseWords("God Ding") ); // "doG gniD"
