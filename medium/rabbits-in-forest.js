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

    for (let [x, count] of map) {
        const groupSize = x + 1;
        const groups = Math.ceil(count / groupSize);
        total += groups * groupSize;
    }

    return total;
}

console.log(numRabbits([1, 1, 2])); // 5
