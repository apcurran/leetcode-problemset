"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (token === "+") {
            const sum = stack.pop() + stack.pop();
            stack.push(sum);
        } else if (token === "-") {
            const a = stack.pop();
            const b = stack.pop();
            const diff = b - a;
            stack.push(diff);
        } else if (token === "*") {
            const prod = stack.pop() * stack.pop();
            stack.push(prod);
        } else if (token === "/") {
            const a = stack.pop();
            const b = stack.pop();
            const quotient = Math.trunc(b / a);
            stack.push(quotient);
        } else {
            // number -- not an op
            const num = Number(token);
            stack.push(num);
        }
    }

    return stack[0];
}

console.log( evalRPN(["2","1","+","3","*"]) ); // 9
console.log( evalRPN(["4","13","5","/","+"]) ); // 6
console.log( evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) ); // 22
