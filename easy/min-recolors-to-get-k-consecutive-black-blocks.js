"use strict";

// /**
//  * solution 1 -- sliding window
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {string} blocks
//  * @param {number} k
//  * @return {number}
//  */
// function minimumRecolors(blocks, k) {
//     let currentWindowRecolorsCount = 0;
//     let minRecolorsCountResult = k;
//     let left = 0;

//     for (let right = 0; right < blocks.length; right++) {
//         // White blocks need to be flipped to get k black blocks in a row
//         if (blocks[right] === "W") {
//             currentWindowRecolorsCount++;
//         }

//         // window size is equal to k
//         if (right - left + 1 === k) {
//             // record current recolor count
//             minRecolorsCountResult = Math.min(minRecolorsCountResult, currentWindowRecolorsCount);

//             if (blocks[left] === "W") {
//                 currentWindowRecolorsCount--;
//             }

//             left++;
//         }
//         // always move right pointer forwards
//     }

//     return minRecolorsCountResult;
// }

/**
 * solution 2 -- brute force
 * time: O(n^2)
 * space: O(1)
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
function minimumRecolors(blocks, k) {
    let minRecolorsCountResult = k;
    let left = 0;

    for (let right = k - 1; right < blocks.length; right++) {
        let recolorCount = 0;

        for (let l = left; l <= right; l++) {
            if (blocks[l] === "W") {
                recolorCount++;
            }
        }

        minRecolorsCountResult = Math.min(minRecolorsCountResult, recolorCount);
        // move left pointer forwards
        left++;
    }

    return minRecolorsCountResult;
}

console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
