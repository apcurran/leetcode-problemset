"use strict";

/**
 * 
 * @param {number} n
 * @returns {number} 
 */
function countPrimes(n) {
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (isPrime(i)) count++;
    }

    return count;
}


/**
 * 
 * @param {number} num
 * @returns {boolean} 
 */
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log( countPrimes(1) ) // 0
console.log( countPrimes(0) ) // 0
console.log( countPrimes(10) ) // 4