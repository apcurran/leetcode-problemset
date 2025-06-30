"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number}
 */
function minAddToMakeValid(str) {
    let leftParenCount = 0;
    let rightParenCount = 0;

    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];

        if (currChar === ")") {
            if (leftParenCount === 0) {
                rightParenCount++;
            } else {
                leftParenCount--;
            }

            continue;
        }

        leftParenCount++;
    }

    return leftParenCount + rightParenCount;
}

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
console.log(minAddToMakeValid("()))((")); // 4
