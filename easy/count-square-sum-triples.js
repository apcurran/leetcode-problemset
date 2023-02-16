"use strict";

/**
 * solution 1
 * time: O(n^3)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function countTriples(n) {
    let triplesCount = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 2; b <= n; b++) {
            for (let c = 3; c <= n; c++) {
                if ((a * a) + (b * b) === (c * c)) {
                    triplesCount++;
                }
            }
        }
    }

    return triplesCount;
}

console.log( countTriples(5) ); // 2
console.log( countTriples(10) ); // 4
