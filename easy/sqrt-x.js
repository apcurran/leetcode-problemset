"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(sqrt(n))
 * space: O(1)
 * 
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let squareRootRoundedDown = 0;

    for (let i = 0; i <= x; i++) {
        const squaredValue = i * i;

        if (squaredValue > squareRootRoundedDown * squareRootRoundedDown && squaredValue <= x) {
            squareRootRoundedDown = i;

            if (squaredValue === x) {
                break;
            }
        }
    }

    return squareRootRoundedDown;
}

console.log( mySqrt(4) ); // 2