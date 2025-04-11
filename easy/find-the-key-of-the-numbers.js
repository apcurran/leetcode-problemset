"use strict";

/**
 * solution 1
 * time: O(1) -- always 4 iterations
 * space: O(1) -- always 4 digits max
 * 
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
function generateKey(num1, num2, num3) {
    const num1Padded = String(num1).padStart(4, "0");
    const num2Padded = String(num2).padStart(4, "0");
    const num3Padded = String(num3).padStart(4, "0");
    let key = "";
    
    for (let i = 0; i < 4; i++) {
        key += Math.min(Number(num1Padded[i]), Number(num2Padded[i]), Number(num3Padded[i]));
    }

    return Number(key);
}

console.log(generateKey(1, 10, 1000)); // 0
console.log(generateKey(987, 879, 798)); // 777
