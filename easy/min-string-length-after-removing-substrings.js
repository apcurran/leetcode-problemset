"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {number}
 */
function minLength(s) {
    let stack = [];

    for (let char of s) {
        stack.push(char);

        if (
            (stack.length >= 2 && stack.at(-2) === "A" && stack.at(-1) === "B") ||
            (stack.at(-2) === "C" && stack.at(-1) === "D")
        ) {
            stack.pop();
            stack.pop();
        }
    }

    return stack.length;
}

// /**
//  * solution 2 -- string replacement
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @return {number}
//  */
// function minLength(s) {
//     while (s.includes("AB") || s.includes("CD")) {
//         if (s.includes("AB")) {
//             s = s.replaceAll("AB", "");
//         }

//         if (s.includes("CD")) {
//             s = s.replaceAll("CD", "");
//         }
//     }

//     return s.length;
// }

console.log(minLength("ABFCACDB")); // 2
console.log(minLength("ACBBD")); // 5
