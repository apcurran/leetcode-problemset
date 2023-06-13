"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
    let stack = [];
    let i = 0;

    for (let value of pushed) {
        stack.push(value);

        while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }

    return stack.length === 0;
}

console.log( validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]) ); // true
console.log( validateStackSequences([1,2,3,4,5], [4,3,5,1,2]) ); // false
