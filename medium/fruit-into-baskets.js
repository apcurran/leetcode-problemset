"use strict";

/**
 * solution 1 -- two-pointers with hashmap
 * time: O(n)
 * space: O(1) -- only two fruit types maintained at any one time
 * 
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
    let fruitCache = new Map();
    let left = 0;
    let total = 0;
    let result = 0;

    for (let right = 0; right < fruits.length; right++) {
        const fruitTypeRight = fruits[right];
        const fruitTypeRightCount = fruitCache.get(fruitTypeRight) || 0;
        fruitCache.set(fruitTypeRight, fruitTypeRightCount + 1);
        total++;

        while (fruitCache.size > 2) {
            // remove excess fruit types
            const fruitTypeLeft = fruits[left];
            const fruitTypeLeftCount = fruitCache.get(fruitTypeLeft) || 0;
            fruitCache.set(fruitTypeLeft, fruitTypeLeftCount - 1);
            total--;
            left++;

            if (fruitCache.get(fruitTypeLeft) <= 0) {
                fruitCache.delete(fruitTypeLeft);
            }
        }

        result = Math.max(result, total);
    }

    return result;
}

console.log( totalFruit([1, 2, 1]) ); // 3
console.log( totalFruit([0, 1, 2, 2]) ); // 3
console.log( totalFruit([1, 2, 3, 2, 2]) ); // 4
