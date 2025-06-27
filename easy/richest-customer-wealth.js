"use strict";

/**
 * Solution 1
 * m = num of customers
 * n = num of banks
 * 
 * Time: O(m * n)
 * Space: O(1)
 * 
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
    let maxCustomerWealth = 0;

    for (let account of accounts) {
        const customerWealth = account.reduce((total, curr) => total + curr, 0);

        if (customerWealth > maxCustomerWealth) maxCustomerWealth = customerWealth;
    }

    return maxCustomerWealth;
}

console.log( maximumWealth([[1, 2, 3], [3, 2, 1]]) ); // 6
console.log( maximumWealth([[1, 5], [7, 3], [3, 5]]) ); // 10
console.log( maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]) ); // 17
