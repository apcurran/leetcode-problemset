"use strict";

// /**
//  * solution 1 -- two-pointer technique
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {string[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// function reverseString(s) {
//     let leftPointer = 0;
//     let rightPointer = s.length - 1;
//     // 0 -> 4
//     // 1 -> 3
//     // 2 -> 2
//     // 3 -> 1
//     // 4 -> 0
//     while (leftPointer < rightPointer) {
//         const temp = s[leftPointer];
//         // left char
//         s[leftPointer] = s[rightPointer];
//         // right char
//         s[rightPointer] = temp;

//         // move pointers
//         leftPointer++;
//         rightPointer--;
//     }
// }

/**
 * solution 1 -- array.reverse() method
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    s.reverse();
}

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
