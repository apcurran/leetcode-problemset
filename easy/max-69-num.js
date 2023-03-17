"use strict";

/**
 * solution 1
 * n = num of digits in num
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
    const numDigitStrs = String(num).split("");
    // flag
    let hasDigitChanged = false;
    let digitStrs = [];

    for (let digitStr of numDigitStrs) {
        if (hasDigitChanged === false && digitStr === "6") {
            digitStrs.push("9");
            hasDigitChanged = true;
        } else {
            digitStrs.push(digitStr);
        }
    }
    
    return Number( digitStrs.join("") );
}

console.log( maximum69Number(9669) ); // 9969
