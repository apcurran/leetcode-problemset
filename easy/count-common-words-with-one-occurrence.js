"uses strict";

/**
 * solution 1 -- hashmap
 * n = words1 length
 * m = words2 length
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
function countWords(words1, words2) {
    // count word freq for words1
    let words1Freq = new Map();

    for (let word of words1) {
        const previousCount = words1Freq.get(word) || 0;
        words1Freq.set(word, previousCount + 1);
    }

    // count word freq for words2
    let words2Freq = new Map();

    for (let word of words2) {
        const previousCount = words2Freq.get(word) || 0;
        words2Freq.set(word, previousCount + 1);
    }

    let counter = 0;
    // increment commonWords by 1 if words1 has 1 freq and words2 has 1 freq
    for (let [word, wordCount] of words1Freq) {
        if (wordCount === 1 && words2Freq.get(word) === 1) {
            counter++;
        }
    }

    return counter;
}

console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]));
// 2
console.log(countWords(["a","ab"], ["a","a","a","ab"]));
// 1
