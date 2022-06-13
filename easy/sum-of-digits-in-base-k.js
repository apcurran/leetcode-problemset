"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function sumBase(n, k) {
    const numStr = Number(n).toString(k);

    return numStr
            .split("")
            .reduce((sum, currNum) => sum + Number(currNum), 0);
}

console.log( sumBase(34, 6) ); // 54 is 5 + 4 = 9
console.log( sumBase(10, 10) ); // 1
