"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} asteroids
//  * @return {number[]}
//  */
// function asteroidCollision(asteroids) {
//     let stack = [];

//     for (let i = 0; i < asteroids.length; i++) {
//         const stackTop = stack[stack.length - 1];
//         const curr = asteroids[i];

//         if (stack.length === 0 || stackTop < 0 || curr > 0) {
//             // stack is empty, and last/curr are not colliding
//             stack.push(curr);
//         } else if (stackTop + curr === 0) {
//             // last and curr collide -> both destroyed
//             stack.pop();
//         } else if (Math.abs(stackTop) < Math.abs(curr)) {
//             // destroy smaller stackTop asteroid
//             stack.pop();
//             i--;
//         }
//     }

//     return stack;
// }

/**
 * solution 2 -- stack (slightly more readable)
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
    let stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1];
        const curr = asteroids[i];

        if (last > 0 && curr < 0) {
            // collision
            if (last + curr === 0) {
                // destroy both asteroids
                stack.pop();
            } else if (Math.abs(last) < Math.abs(curr)) {
                stack.pop();
                i--;
            }
        } else {
            // no collision
            stack.push(curr);
        }
    }

    return stack;
}

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
