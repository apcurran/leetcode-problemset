"use strict";

/**
 * m = s1.length
 * n = s2.length
 *
 * solution 1 -- iterative
 * time: O(m + n)
 * space: O(n + n)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
function uncommonFromSentences(s1, s2) {
    const str1Arr = s1.split(" ");
    const str2Arr = s2.split(" ");
    let uncommonArr = [];
    let wordsMap = new Map();

    for (let word of str1Arr) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            const prevCount = wordsMap.get(word);
            wordsMap.set(word, prevCount + 1);
        }
    }

    for (let word of str2Arr) {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            const prevCount = wordsMap.get(word);
            wordsMap.set(word, prevCount + 1);
        }
    }

    for (let [word, count] of wordsMap) {
        if (count === 1) uncommonArr.push(word);
    }

    return uncommonArr;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour")); // ["sweet", "sour"]
