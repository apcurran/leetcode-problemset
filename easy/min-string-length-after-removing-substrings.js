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
        if (stack.length > 0 && char === "B" && stack.at(-1) === "A") {
            // if non-empty stack, and top of stack is "A" with current char "B" (adjacent "AB", remove)
            stack.pop();
        } else if (stack.length > 0 && char === "D" && stack.at(-1) === "C") {
            // if non-empty stack, and top of stack is "D" with current char "C" (adjacent "CD", remove)
            stack.pop();
        } else {
            stack.push(char);
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
