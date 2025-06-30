"use strict";

/**
 * solution 1
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function countOperations(num1, num2) {
    let counter = 0;

    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            const revisedNum1 = num1 - num2;
            num1 = revisedNum1;
        } else {
            const revisedNum2 = num2 - num1;
            num2 = revisedNum2;
        }

        counter++;
    }

    return counter;
}

console.log(countOperations(2, 3)); // 3
console.log(countOperations(10, 10)); // 1
