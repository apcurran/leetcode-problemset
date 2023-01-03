"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {number}
//  */
// function maxDepth(str) {
//     let openParensStack = [];
//     let maxNestingCount = 0;
//     // iterate string chars
//     for (let character of str) {
//         // check for open paren -> add to stack AND
//         if (character === "(") {
//             // push on to stack
//             openParensStack.push("(");
//             // peek at last elem on top of the stack -- if it is a ( open paren
//             const topOfStack = openParensStack[openParensStack.length - 1];

//             if (topOfStack === "(") {
//                 // then increment counter
//                 maxNestingCount = Math.max(maxNestingCount, openParensStack.length);
//             }
//         }
        
//         if (character === ")") {
//             // check for closing paren -> pop off stack
//             openParensStack.pop();
//             // skip addition of current paren to stack
//         }
//     }

//     // return nesting depth counter
//     return maxNestingCount;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function maxDepth(str) {
    let maxNestingCount = 0;
    let currentCount = 0;

    for (let character of str) {
        if (character === "(") {
            currentCount++;
            maxNestingCount = Math.max(maxNestingCount, currentCount);
        }

        if (character === ")") {
            currentCount--;
        }
    }

    return maxNestingCount;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("()()")); // 1
console.log(maxDepth("()(()())")); // 2
