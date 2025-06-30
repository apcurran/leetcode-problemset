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
    const arithmeticSymbols = "+-*/";
    let stack = [];

    for (let token of tokens) {
        if (!arithmeticSymbols.includes(token)) {
            stack.push(token);
        } else {
            // if token is arithmetic symbol, pop two previous stack items, perform op, then add back to stack
            const item2 = Number(stack.pop());
            const item1 = Number(stack.pop());

            if (token === "+") {
                const sum = item1 + item2;
                stack.push(sum);
            } else if (token === "-") {
                const diff = item1 - item2;
                stack.push(diff);
            } else if (token === "*") {
                const product = item1 * item2;
                stack.push(product);
            } else {
                const quotient = Math.trunc(item1 / item2);
                stack.push(quotient);
            }
        }
    }

    return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(
    evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ]),
); // 22
