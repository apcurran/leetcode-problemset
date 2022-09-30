"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function smallestEvenMultiple(n) {
//     let twoNum = 2;

//     while (twoNum % n !== 0) {
//         twoNum += 2;
//     }

//     return twoNum;
// }

// /**
//  * solution 2 -- recursive
//  * time: O(n)
//  * space: O(n) -- due to call stack mem
//  * 
//  * @param {number} n
//  * @return {number}
//  */
// function smallestEvenMultiple(n, twoCounter = 2) {
//     if (twoCounter % n === 0) return twoCounter;
    
//     return smallestEvenMultiple(n, twoCounter += 2);
// }

/**
 * solution 3 -- math formula
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function smallestEvenMultiple(n) {
    // if num is divisible by two (even number) then n is the first even multiple
    if (n % 2 === 0) return n;
    // if n is odd, then the sum of two odd nums is always even, which is therefore divisible by two
    return n * 2;
}

console.log( smallestEvenMultiple(2) ); // 2
console.log( smallestEvenMultiple(5) ); // 10
console.log( smallestEvenMultiple(6) ); // 6
