"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function smallestEvenMultiple(n) {
    let twoNum = 2;

    while (twoNum % n !== 0) {
        twoNum += 2;
    }

    return twoNum;
}

console.log( smallestEvenMultiple(2) ); // 2
console.log( smallestEvenMultiple(5) ); // 10
console.log( smallestEvenMultiple(6) ); // 6
