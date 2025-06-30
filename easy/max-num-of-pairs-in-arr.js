"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function numberOfPairs(nums) {
    let numsCache = new Map();

    for (let num of nums) {
        const previousNumFrequency = numsCache.get(num) || 0;
        // update frequency
        numsCache.set(num, previousNumFrequency + 1);
    }

    let pairsCounter = 0;
    let leftoversCounter = 0;

    for (let numberFrequency of numsCache.values()) {
        if (numberFrequency === 1) {
            leftoversCounter++;

            continue;
        }

        // if there is a frequency greater than 1, divide this number by two (pairs)
        const numberPairs = Math.floor(numberFrequency / 2);
        // then take this quotient and add this to a pairs counter
        pairsCounter += numberPairs;
        const numberLeftover = numberFrequency % 2;
        leftoversCounter += numberLeftover;
    }

    return [pairsCounter, leftoversCounter];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3, 1] -- 3 pairs formed and 1 leftover int in numsArr
console.log(numberOfPairs([1, 1])); // [1, 0]
console.log(numberOfPairs([0])); // [0, 1]
