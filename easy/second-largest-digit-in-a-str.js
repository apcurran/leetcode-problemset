"use strict";

// /**
//  * solution 1
//  * time: O(n log n) -- due to sorting
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {number}
//  */
// function secondHighest(str) {
//     const digitsStrArr = str.match(/[0-9]/g);

//     if (!digitsStrArr) return -1;

//     const digitsArr = digitsStrArr.map((num) => +num);
//     const sortedDigitsArr = digitsArr.sort((a, b) => b - a);
//     const sortedDigitsSet = new Set(sortedDigitsArr);
//     console.log(new Set(digitsStrArr));
    

//     if (sortedDigitsSet.size <= 1) return -1;
    
//     return [...sortedDigitsSet][1];
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function secondHighest(str) {
    const digitsStrArr = str.match(/[0-9]/g);

    if (!digitsStrArr) return -1;

    const digitsArr = digitsStrArr.map((num) => +num);
    const digitsSet = new Set(digitsArr);

    if (digitsSet.size <= 1) return -1;

    const largestDigit = Math.max(...digitsSet);
    digitsSet.delete(largestDigit);

    return Math.max(...digitsSet);
}

console.log( secondHighest("dfa12321afd") ); // 2
console.log( secondHighest("xyz") ); // -1
