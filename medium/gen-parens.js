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

    function recurse(openN, closedN, parenthesisStr) {
        // only add if openN is greater -- this prevents invalid paren combos
        if (openN > closedN) return;

        if (openN === 0 && closedN === 0) {
            results.push(parenthesisStr);

            return;
        }

        if (openN > 0) {
            recurse(openN - 1, closedN, parenthesisStr + "(");
        }

        if (closedN > 0) {
            recurse(openN, closedN - 1, parenthesisStr + ")");
        }
    }

    recurse(n, n, "");

    return results;
}

console.log( generateParenthesis(3) ); // ["((()))","(()())","(())()","()(())","()()()"]
