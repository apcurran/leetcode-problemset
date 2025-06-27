"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num
 * @return {number}
 */
function countDigits(num) {    
    const digitsStr = num
        .toString()
        .split("");
    let divisibleCounter = 0;
    
    for (let digitStr of digitsStr) {
        const currentDigit = Number(digitStr);
        const isNumDivisibleByDigit = num % currentDigit === 0;
        
        if (isNumDivisibleByDigit) divisibleCounter++;
    }

    return divisibleCounter;
}

console.log( countDigits(121) ); // 2
console.log( countDigits(7) ); // 1
console.log( countDigits(1248) ); // 4

