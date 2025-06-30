"use strict";

/**
 * solution 1 -- Set obj
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} candyTypes
 * @return {number}
 */
function distributeCandies(candyTypes) {
    const eatableCandyAmount = candyTypes.length / 2;
    const candyTypesAmount = new Set(candyTypes).size;

    return Math.min(eatableCandyAmount, candyTypesAmount);
}

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
console.log(distributeCandies([1, 1, 2, 3])); // 2
console.log(distributeCandies([6, 6, 6, 6])); // 1
