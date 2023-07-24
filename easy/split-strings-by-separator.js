"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {string[]} words
 * @param {string} separator
 * @return {string[]}
 */
function splitWordsBySeparator(words, separator) {
    let results = [];

    for (let word of words) {
        const splitWord = word.split(separator);

        for (let chunk of splitWord) {
            if (chunk !== "") {
                results.push(chunk);
            }
        }
    }

    return results;
}

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
// ["one","two","three","four","five","six"]
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
// ["easy","problem"]
