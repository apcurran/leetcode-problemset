"use strict";

/**
 * solution 1 -- flag
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function countAsterisks(str) {
    let isOkay = true;
    let asterisksCount = 0;

    for (let char of str) {
        if (char === "|") isOkay = !isOkay;

        if (isOkay && char === "*") asterisksCount++;
    }

    return asterisksCount;
}

console.log( countAsterisks("l|*e*et|c**o|*de|") ); // 2
console.log( countAsterisks("iamprogrammer") ); // 0
console.log( countAsterisks("yo|uar|e**|b|e***au|tifu|l") ); // 5
