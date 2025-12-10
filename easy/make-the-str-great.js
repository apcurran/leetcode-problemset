"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(n^2)
//  * space: O(n^2)
//  *
//  * @param {string} str
//  * @return {string}
//  */
// function makeGood(str) {
//     // recursion
//     for (let i = 0; i < str.length - 1; i++) {
//         const currLetterCharCode = str.charCodeAt(i);
//         const nextLetterCharCode = str.charCodeAt(i + 1);

//         if ( Math.abs(currLetterCharCode - nextLetterCharCode) === 32 ) {
//             // remove first instance where currLetter is lowercase, but same as next letter which is uppercase
//             const removedAdjacentChars = str.slice(0, i) + str.slice(i + 2);
//             // repeat until satisfied
//             return makeGood(removedAdjacentChars);
//         }
//     }

//     return str;
// }

/**
 * solution 2 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {string}
 */
function makeGood(str) {
    let stack = [];
    let i = 0;

    while (i < str.length) {
        // stack is not empty AND
        // current top of stack and current char are adjacent same letters with diff casing
        if (stack.length > 0 && Math.abs(stack.at(-1).charCodeAt(0) - str.charCodeAt(i)) === 32) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }

        i++;
    }

    return stack.join("");
}

console.log(makeGood("leEeetcode")); // "leetcode"
console.log(makeGood("abBAcC")); // ""
