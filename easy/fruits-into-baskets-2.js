"use strict";

/**
 * solution 1
 * n = fruits length
 * m = baskets length
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
function numOfUnplacedFruits(fruits, baskets) {
    let unplacedFruitTypesCount = 0;

    fruitsLoop: for (let fruit of fruits) {
        for (let j = 0; j < baskets.length; j++) {
            // place fruit into first available basket
            if (baskets[j] >= fruit) {
                // place (update current basket to be 0)
                baskets[j] = 0;

                // exit since we found a working match
                continue fruitsLoop;
            }
        }

        // if we check each basket and none work, increment counter
        unplacedFruitTypesCount++;
    }

    return unplacedFruitTypesCount;
}

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4])); // 1
