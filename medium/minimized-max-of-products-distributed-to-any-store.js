"use strict";

/**
 * solution 1 -- binary search
 * time: O(q * log * max(q))
 * space: O(q)
 *
 * @param {number} n
 * @param {number[]} quantities
 * @return {number} the minimum possible x value
 */
function minimizedMaximum(n, quantities) {
    /**
     * @param {number} x
     * @returns {boolean}
     */
    function canDistribute(x) {
        let stores = 0;

        for (let quantity of quantities) {
            stores += Math.ceil(quantity / x);
        }

        return stores <= n;
    }

    // bin search
    let left = 1;
    let right = Math.max(...quantities);
    let result = 0;

    while (left <= right) {
        const x = left + Math.floor((right - left) / 2);

        if (canDistribute(x)) {
            result = x;
            // now look for a smaller x
            right = x - 1;
        } else {
            // look for a bigger x
            left = x + 1;
        }
    }

    return result;
}

console.log(minimizedMaximum(6, [11, 6])); // 3
