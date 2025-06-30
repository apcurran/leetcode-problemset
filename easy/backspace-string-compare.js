"use strict";

/**
 * solution 1 -- stack
 * n = s length
 * m = t length
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
    let sStack = [];
    let tStack = [];

    for (let char of s) {
        if (char === "#") {
            sStack.pop();
        } else {
            sStack.push(char);
        }
    }

    for (let char of t) {
        if (char === "#") {
            tStack.pop();
        } else {
            tStack.push(char);
        }
    }

    if (sStack.length !== tStack.length) return false;

    for (let i = 0; i < sStack.length; i++) {
        const sStackChar = sStack[i];
        const tStackChar = tStack[i];

        if (sStackChar !== tStackChar) return false;
    }

    return true;
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
