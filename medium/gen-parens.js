"use strict";

/**
 * solution 1 -- recursion
 * time: O(2^n)
 * space: O(n)
 * 
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let results = [];

    /**
     * @param {number} openN 
     * @param {number} closedN 
     * @param {string} parens 
     * @returns {void}
     */
    function backtrack(openN, closedN, parens) {
        if (openN === n && closedN === n) {
            // add valid, finished parentheses string into results
            results.push(parens);

            return;
        }

        if (openN < n) {
            backtrack(openN + 1, closedN, parens + "(");
        }

        if (closedN < openN) {
            backtrack(openN, closedN + 1, parens + ")");
        }
    }

    backtrack(0, 0, "");

    return results;
}

// /**
//  * solution 2 -- recursion (stack)
//  * time: O(2^n)
//  * space: O(n)
//  * 
//  * @param {number} n
//  * @return {string[]}
//  */
// function generateParenthesis(n) {
//     let results = [];
//     let stack = [];

//     /**
//      * @param {number} openN 
//      * @param {number} closedN 
//      * @returns {void}
//      */
//     function recurse(openN, closedN) {
//         if (openN === closedN && closedN === n) {
//             const completedParensCombination = stack.join("");
//             results.push(completedParensCombination);
//         }

//         if (openN < n) {
//             stack.push("(");
//             recurse(openN + 1, closedN);
//             stack.pop();
//         }

//         if (closedN < openN) {
//             stack.push(")");
//             recurse(openN, closedN + 1);
//             stack.pop();
//         }
//     }

//     recurse(0, 0);

//     return results;
// }

console.log( generateParenthesis(3) ); // ["((()))","(()())","(())()","()(())","()()()"]
