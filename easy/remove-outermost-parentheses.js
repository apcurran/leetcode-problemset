"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} str
//  * @return {string}
//  */
// function removeOuterParentheses(str) {
//     let stack = [];
//     let result = "";

//     for (let paren of str) {
//         if (paren === "(") {
//             if (stack.length > 0) {
//                 result += paren;
//             }

//             stack.push(paren);
//         } else {
//             stack.pop();

//             if (stack.length > 0) {
//                 result += paren;
//             }
//         }
//     }

//     return result;
// }

/**
 * solution 2 -- track depth
 * time: O(n)
 * space: O(1) -- not including required result str
 *
 * @param {string} str
 * @return {string}
 */
function removeOuterParentheses(str) {
    let depth = 0;
    let result = "";

    for (let paren of str) {
        if (paren === "(") {
            if (depth > 0) {
                result += paren; // // not the outermost open
            }

            depth++;
        } else {
            // ")" closing paren here
            depth--;

            if (depth > 0) {
                result += paren; // // not the outermost close
            }
        }
    }

    return result;
}

console.log(removeOuterParentheses("(()())(())")); // "()()()"
