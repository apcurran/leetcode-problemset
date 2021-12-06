"use strict";

/**
 * Recursive solution
 * Time: O(n log(n))
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
    const numStr = num.toString();
    // Base case
    if (numStr.length === 1) return num;

    const addedDigits = numStr
                            .split("")
                            .reduce((total, numStr) => total + Number(numStr), 0);

    return addDigits(addedDigits);
}

console.log( addDigits(38) ); // 2