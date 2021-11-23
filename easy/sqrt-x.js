"use strict";

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    const xSqrt = Math.sqrt(x);

    return Math.floor(xSqrt);
}

console.log( mySqrt(4) ); // 2