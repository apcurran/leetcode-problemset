"use strict";

/**
 * solution 1
 * n = arr len
 * m = word len
 * time: O(n * (m * log m))
 * space: O(n)
 *
 * @param {string[]} words
 * @return {string[]}
 */
function removeAnagrams(words) {
    let resArr = [];
    let prevSortedWord = "";

    for (let word of words) {
        const currSortedWord = word.split("").toSorted().join("");

        if (currSortedWord === prevSortedWord) continue;

        prevSortedWord = currSortedWord;
        resArr.push(word);
    }

    return resArr;
}

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])); // ["abba","cd"]
