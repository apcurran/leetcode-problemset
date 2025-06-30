"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n^2 * log n)
//  * space: O(1)
//  *
//  * @param {number[]} stones
//  * @return {number}
//  */
// function lastStoneWeight(stones) {
//     while (stones.length > 1) {
//         // sort ASC
//         stones.sort((a, b) => a - b);
//         const largestStoneY = stones.pop();
//         const smallerStoneX = stones.pop();

//         if (largestStoneY === smallerStoneX && stones.length === 0) {
//             return 0;
//         } else if (largestStoneY === smallerStoneX) {
//             // destroy both by not re-adding any to arr
//             continue;
//         }

//         // y = y - x
//         const revisedYStone = largestStoneY - smallerStoneX;
//         stones.push(revisedYStone);
//     }

//     return stones[0];
// }

/**
 * solution 2 -- recursive
 * time: O(n^2 * log n)
 * space: O(n)
 *
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    // base case
    if (stones.length === 1) return stones[0];

    // sort ASC
    stones.sort((a, b) => a - b);
    const y = stones.pop();
    const x = stones.pop();
    stones.push(Math.abs(y - x));

    return lastStoneWeight(stones);
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1])); // 1
console.log(lastStoneWeight([2, 2])); // 0
