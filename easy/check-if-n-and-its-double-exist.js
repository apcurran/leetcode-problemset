"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// function checkIfExist(arr) {
//     while (arr.length) {
//         const num = arr.pop();

//         if (arr.includes(num * 2) || arr.includes(num / 2)) return true;
//     }

//     return false;
// }

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
    let uniqueNums = new Set();

    for (let num of arr) {
        if (uniqueNums.has(num)) return true;

        uniqueNums.add(num * 2);
        uniqueNums.add(num / 2);
    }

    return false;
}

console.log( checkIfExist([10,2,5,3]) ); // true
console.log( checkIfExist([7,1,14,11]) ); // true
console.log( checkIfExist([3,1,7,11]) ); // false
