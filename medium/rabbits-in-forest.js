"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} answers
 * @return {number}
 */
function numRabbits(answers) {
    let map = new Map();

    for (let answer of answers) {
        const answerCountPrevious = map.get(answer) || 0;
        map.set(answer, answerCountPrevious + 1);
    }

    let total = 0;

    for (let [key, value] of map) {
        const amount = Math.ceil(value / (key + 1)) * (key + 1);
        total += amount;
    }

    return total;
}

console.log(numRabbits([1,1,2])); // 5
