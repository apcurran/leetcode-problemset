"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
    let fivesCount = 0;
    let tensCount = 0;

    for (let bill of bills) {
        if (bill === 5) {
            // no change to make
            fivesCount++;
        } else if (bill === 10) {
            if (fivesCount === 0) return false;

            // make change with 1 five bill
            fivesCount--;
            tensCount++;
        } else if (bill === 20) {
            if (fivesCount > 0 && tensCount > 0) {
                // make change with 1 ten bill and 1 five bill
                fivesCount--;
                tensCount--;
            } else if (fivesCount >= 3) {
                // make change with 3 five bills
                fivesCount -= 3;
            } else {
                // not enough bills to make change
                return false;
            }
        }
    }

    return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
