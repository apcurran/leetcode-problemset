"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^3)
//  * space: O(1)
//  * 
//  * @param {number[]} arr
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @return {number}
//  */
// function countGoodTriplets(arr, a, b, c) {
//     let goodTripletCount = 0;

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             for (let k = j + 1; k < arr.length; k++) {
//                 if (Math.abs(arr[i] - arr[j]) <= a &&
//                     Math.abs(arr[j] - arr[k]) <= b &&
//                     Math.abs(arr[i] - arr[k]) <= c) {
//                     goodTripletCount++;
//                 }
//             }
//         }
//     }

//     return goodTripletCount;
// }

/**
 * solution 2 -- brute force (optimized)
 * time: O(n^3)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function countGoodTriplets(arr, a, b, c) {
    let goodTripletCount = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) > b) continue;
                
                if (Math.abs(arr[i] - arr[k]) <= c) {
                    goodTripletCount++;
                }
            }
        }
    }

    return goodTripletCount;
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)); // 4
