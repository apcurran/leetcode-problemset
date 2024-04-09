"use strict";

// /**
//  * solution 1 -- simulation
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} tickets
//  * @param {number} k
//  * @return {number}
//  */
// function timeRequiredToBuy(tickets, k) {
//     let totalTimeInSeconds = 0;

//     outerLoop: while (tickets[k] > 0) {
//         for (let i = 0; i < tickets.length; i++) {
//             // decrease each value by 1 that is over 0
//             if (tickets[i] <= 0) continue;

//             tickets[i] -= 1;
//             // for each value decreased, add 1 to total time
//             totalTimeInSeconds += 1;

//             // check current position is kth and at 0
//             if (i === k && tickets[i] === 0) {
//                 break outerLoop;
//             }
//         }
//     }

//     return totalTimeInSeconds;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
function timeRequiredToBuy(tickets, k) {
    let totalTimeInSeconds = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            totalTimeInSeconds += Math.min(tickets[i], tickets[k]);
        } else {
            totalTimeInSeconds += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return totalTimeInSeconds;
}

console.log(timeRequiredToBuy([2,3,2], 2)); // 6
console.log(timeRequiredToBuy([5,1,1,1], 0)); // 8
