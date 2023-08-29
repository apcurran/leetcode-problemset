"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
    let balance = 0;
    let day = 1;
    let week = 0;

    for (let i = 1; i <= n; i++) {
        balance = balance + (week + day);
        day++;

        // full week
        if (i % 7 === 0) {
            week++;
            day = 1;
        }
    }

    return balance;
}

console.log(totalMoney(4)); // 10 (1 + 2 + 3 + 4)
