"use strict";

/**
 * solution 1
 * time: O(log m * n)
 * space: O(1)
 *
 * @param {number} num
 * @return {number}
 */
function countEven(num) {
    let result = 0;

    for (let i = 2; i <= num; i++) {
        let n = i;
        let digitsSum = 0;

        while (n !== 0) {
            digitsSum += n % 10; // add current digit
            n = Math.trunc(n / 10); // get next digit in num
        }

        if (digitsSum % 2 === 0) {
            result++;
        }
    }

    return result;
}

console.log(countEven(4)); // 2
console.log(countEven(30)); // 14
