"use strict";

/**
 * Solution 1
 * Time: O(n^2)
 * Space: O(n)
 * 
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
    const customerWealthArr = new Set();

    for (let account of accounts) {
        const customerWealth = account.reduce((total, curr) => total + curr, 0);
        customerWealthArr.add(customerWealth);
    }

    return Math.max(...customerWealthArr);
}

console.log( maximumWealth([[1,2,3],[3,2,1]]) ); // 6
console.log( maximumWealth([[1,5],[7,3],[3,5]]) ); // 10
console.log( maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) ); // 17
