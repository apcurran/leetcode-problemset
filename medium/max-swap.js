"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
    let strDigits = [...String(num)];

    let maxDigit = "0";
    let maxI = -1;
    let swapI = -1;
    let swapJ = -1;

    for (let i = strDigits.length - 1; i >= 0; i--) {
        // max
        if (strDigits[i] > maxDigit) {
            maxDigit = strDigits[i];
            maxI = i;
        }
        // swap
        if (strDigits[i] < maxDigit) {
            swapI = i;
            swapJ = maxI;
        }
    }

    // swap two digits now
    [strDigits[swapI], strDigits[swapJ]] = [strDigits[swapJ], strDigits[swapI]];

    return Number(strDigits.join(""));
}

console.log(maximumSwap(2736)); // 7236
