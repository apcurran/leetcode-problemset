"use strict";

/**
 * Solution 1 -- O(n)
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
function fairCandySwap(aliceSizes, bobSizes) {
    const aliceSizesSum = aliceSizes.reduce((total, curr) => total + curr, 0);
    const bobSizesSum = bobSizes.reduce((total, curr) => total + curr, 0);
    const difference = (aliceSizesSum - bobSizesSum) / 2;
    const aliceSizesSet = new Set(aliceSizes);
    const bobSizesSet = new Set(bobSizes);

    for (let num of bobSizesSet) {
        const neededVal = difference + num;

        if (aliceSizesSet.has(neededVal)) {
            return [neededVal, num];
        }
    }

    return [];
}

console.log( fairCandySwap([1, 1], [2, 2]) ); // [1, 2]
console.log( fairCandySwap([1, 2, 5], [2, 4]) ); // [5, 4]
