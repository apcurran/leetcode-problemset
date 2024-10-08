"use strict";

/**
 * solution 1 -- two pointers
 * time: O(min(s1, s2))
 * space: O(s1 + s2)
 * 
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
function areSentencesSimilar(sentence1, sentence2) {
    let sentence1Words = sentence1.split(" ");
    let sentence2Words = sentence2.split(" ");

    if (sentence2Words.length < sentence1Words.length) {
        // swap
        const temp = sentence1Words;
        sentence1Words = sentence2Words;
        sentence2Words = temp;
    }
    // start from the front comparison of words
    let l1 = 0;
    let l2 = 0;

    while (l1 < sentence1Words.length && l2 < sentence2Words.length && sentence1Words[l1] === sentence2Words[l2]) {
        l1++;
        l2++;
    }

    // start from the end comparison of words
    let r1 = sentence1Words.length - 1;
    let r2 = sentence2Words.length - 1;

    while (r1 >= 0 && r2 >= 0 && sentence1Words[r1] === sentence2Words[r2]) {
        r1--;
        r2--;
    }

    return l1 > r1;
}

console.log(areSentencesSimilar("My name is Haley", "My Haley")); // true
console.log(areSentencesSimilar("of", "A lot of words")); // false
