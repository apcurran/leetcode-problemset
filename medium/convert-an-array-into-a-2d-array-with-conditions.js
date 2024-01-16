"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// function findMatrix(nums) {
//     let frequencies = new Array(nums.length + 1).fill(0);
//     let results = [];

//     for (let num of nums) {
//         const numFreq = frequencies[num];

//         if (numFreq >= results.length) {
//             // add a new empty subarray to results
//             results.push([]);
//         }

//         results[numFreq].push(num);
//         frequencies[num] += 1;
//     }

//     return results;
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function findMatrix(nums) {
    let frequencies = new Map();
    let results = [];

    for (let num of nums) {
        const numCurrentFreq = frequencies.get(num) || 0;

        if (numCurrentFreq >= results.length) {
            // add a new empty subarray to results
            results.push([]);
        }

        results[numCurrentFreq].push(num);
        // increment num frequency by 1 (to count current occurrence)
        frequencies.set(num, numCurrentFreq + 1);
    }

    return results;
}

console.log(findMatrix([1,3,4,1,2,3,1]));
// [[1,3,4,2], [1,3], [1]]
