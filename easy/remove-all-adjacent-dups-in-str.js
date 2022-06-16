"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function removeDuplicates(str) {
    let stack = [];
    
    for (let letter of str) {
        const stackTopPeek = stack[stack.length - 1];
        stackTopPeek === letter ? stack.pop() : stack.push(letter);
    }

    return stack.join("");
}

console.log( removeDuplicates("abbaca") ); // "ca"
console.log( removeDuplicates("azxxzy") ); // "ay"
