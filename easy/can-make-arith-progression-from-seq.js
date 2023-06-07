"use strict";

/**
 * solution 1
 * time: O(n * log n) -- sort
 * space: O(1)
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
    // ASC order
    arr.sort((a, b) => a - b);

    // pre-fill with diff between first two values
    let differenceBetweenValues = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        const currentValue = arr[i];
        const nextValue = arr[i + 1];
        const currentDifference = nextValue - currentValue;

        if (currentDifference !== differenceBetweenValues) {
            return false;
        }
    }

    return true;
}

console.log( canMakeArithmeticProgression([3,5,1]) ); // true
console.log( canMakeArithmeticProgression([1,2,4]) ); // false
