"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} coordinates
 * @return {boolean}
 */
function squareIsWhite(coordinates) {
    const letterCode = coordinates.charCodeAt(0);
    const digitCode = coordinates.charCodeAt(1);

    return letterCode % 2 !== digitCode % 2;
}

console.log(squareIsWhite("a1")); // false
console.log(squareIsWhite("h3")); // true
