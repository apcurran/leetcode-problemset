"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(q * a)
//  * space: O(a) -- including results array
//  * 
//  * @param {number[]} arr
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// function xorQueries(arr, queries) {
//     let results = [];

//     for (let [leftStart, rightEnd] of queries) {
//         // for current query,
//         // from left index to right index
//         let xorValue = arr[leftStart];

//         for (let i = leftStart + 1; i <= rightEnd; i++) {
//             const currentValue = arr[i];
//             // XOR ^ op on arr value
//             xorValue ^= currentValue;
//         }
//         // add result to results array
//         results.push(xorValue);
//     }

//     return results;
// }

/**
 * solution 2 -- prefix XOR
 * time: O(a + q)
 * space: O(a) -- including results array
 * 
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
function xorQueries(arr, queries) {
    let prefix = [0];

    for (let value of arr) {
        const xorValue = prefix.at(-1) ^ value;
        prefix.push(xorValue);
    }

    let results = [];

    for (let [leftStart, rightEnd] of queries) {
        const xorValue = prefix[rightEnd + 1] ^ prefix[leftStart];
        results.push(xorValue);
    }

    return results;
}

console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]));
// [2,7,14,8]
console.log(xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]));
// [8,0,4,4]
