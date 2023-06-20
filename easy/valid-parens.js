"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {boolean}
 */
function isValid(str) {
    let stack = [];

    for (let currentBracket of str) {
        switch (currentBracket) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default: {
                const expectedClosingBracket = stack.pop();

                if (currentBracket !== expectedClosingBracket) return false;
            }
        }
    }

    return stack.length === 0;
}


// /**
//  * solution 2 -- alt stack version
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {boolean}
//  */
// function isValid(str) {
//     const parenthesesMatches = new Map([
//         [")", "("],
//         ["]", "["],
//         ["}", "{"]
//     ]);
//     let stack = [];

//     for (let char of str) {
//         if (!parenthesesMatches.has(char)) {
//             stack.push(char);

//             continue;
//         }

//         const stackPeek = stack[stack.length - 1];

//         if (stack.length > 0 && parenthesesMatches.get(char) === stackPeek) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }

//     return stack.length === 0;
// }

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
