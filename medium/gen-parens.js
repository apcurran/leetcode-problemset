"use strict";

// /**
//  * solution 1 -- recursion
//  * time: O(2^n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {string[]}
//  */
// function generateParenthesis(n) {
//     let results = [];

//     /**
//      * @param {number} openN
//      * @param {number} closedN
//      * @param {string} parens
//      * @returns {void}
//      */
//     function getCombo(openN, closedN, parens) {
//         if (openN === n && closedN === n) {
//             // add valid, finished parentheses string into results
//             results.push(parens);

//             return;
//         }

//         if (openN < n) {
//             getCombo(openN + 1, closedN, parens + "(");
//         }

//         if (closedN < openN) {
//             getCombo(openN, closedN + 1, parens + ")");
//         }
//     }

//     getCombo(0, 0, "");

//     return results;
// }

/**
 * solution 2 -- (iterative) stack
 * time: O(2^n)
 * space: O(n)
 *
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let results = [];
    let stack = [["", 0, 0]]; // pre-set this stack with a first run

    while (stack.length > 0) {
        // get top stack item
        const [parens, openN, closedN] = stack.pop();

        if (openN === n && closedN === n) {
            results.push(parens);

            continue;
        }

        // pushed first so that it will be popped second later on
        if (closedN < openN) {
            stack.push([parens + ")", openN, closedN + 1]);
        }

        if (openN < n) {
            stack.push([parens + "(", openN + 1, closedN]);
        }
    }

    return results;
}

// /**
//  * solution 3 -- recursion (stack)
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

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
