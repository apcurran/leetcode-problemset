"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string[]} arr
//  * @param {number} k
//  * @return {string}
//  */
// function kthDistinct(arr, k) {
//     // cache strs and counts in map
//     let strsMap = new Map();

//     for (let str of arr) {
//         const prevCount = strsMap.get(str) || 0;
//         strsMap.set(str, prevCount + 1);
//     }

//     let kthCount = 1;
//     // iterate map looking for distinct (1 count) str that is the kth distinct str in arr
//     for (let [str, count] of strsMap) {
//         if (count !== 1) continue;

//         if (kthCount === k) return str;

//         kthCount++;
//     }

//     // no match present in arr
//     return "";
// }

/**
 * solution 2 -- brute force
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
function kthDistinct(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        let distinctFlag = true;
        
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;

            if (arr[i] === arr[j]) {
                distinctFlag = false;

                break;
            }
        }

        if (distinctFlag) {
            k--;

            if (k === 0) {
                return arr[i];
            }
        }
    }

    // no match from array
    return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // "a"
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // "aaa"
console.log(kthDistinct(["a", "b", "a"], 3)); // ""
