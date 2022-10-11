"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let flowerbedCopy = [0, ...flowerbed, 0];
    let canPlantCount = 0;

    for (let i = 1; i < flowerbedCopy.length - 1; i++) {
        const currVal = flowerbedCopy[i];
        const prevVal = flowerbedCopy[i - 1];
        const nextVal = flowerbedCopy[i + 1];

        if (currVal === 0 && prevVal === 0 && nextVal === 0) {
            // we can plant a flower here
            canPlantCount++;
            // skip forward by two (one incr here and one incr in for loop setup)
            i += 1;
        }
    }

    return n <= canPlantCount;
}

console.log( canPlaceFlowers([1,0,0,0,1], 1) ); // true
console.log( canPlaceFlowers([1,0,0,0,1], 2) ); // false
console.log( canPlaceFlowers([1,0,0,0,0,1], 2) ); // false
console.log( canPlaceFlowers([1,0,0,0,0,0,1], 2) ); // true
