"use strict";

/**
 * solution 1 -- iterative
 * 
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    while (stones.length > 1) {
        // sort ASC
        stones.sort((a, b) => a - b);
        const largestStoneY = stones.pop();
        const smallerStoneX = stones.pop();

        if (largestStoneY === smallerStoneX && stones.length === 0) {
            return 0;
        } else if (largestStoneY === smallerStoneX) {
            // destroy both by not re-adding any to arr
            continue;
        }

        // destroy x and y = y - x
        const revisedYStone = largestStoneY - smallerStoneX;
        stones.push(revisedYStone);
    }

    return stones[0];
}

console.log( lastStoneWeight([2,7,4,1,8,1]) ); // 1
console.log( lastStoneWeight([1]) ); // 1
console.log( lastStoneWeight([2,2]) ); // 0
