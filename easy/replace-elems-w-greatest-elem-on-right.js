"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length -1) {
            arr[i] = -1;
            break;
        }

        const elemsToRight = arr.slice(i + 1);
        const greatestElemToRight = Math.max(...elemsToRight);
        arr[i] = greatestElemToRight;
    }

    return arr;
}

console.log( replaceElements([17,18,5,4,6,1]) ); // [18,6,6,6,1,-1]
console.log( replaceElements([400]) ); // [-1]
