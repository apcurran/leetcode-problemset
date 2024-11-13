"use strict";

// /**
//  * solution 1 -- brute force, TLE
//  * n = queries length
//  * m = items length
//  * time: O(n * m)
//  * space: O(n)
//  * 
//  * @param {number[][]} items
//  * @param {number[]} queries
//  * @return {number[]}
//  */
// function maximumBeauty(items, queries) {
//     let maxBeauties = [];

//     for (let query of queries) {
//         let currentMaxBeautyValue = 0; // default value based on problem description

//         for (let [itemPrice, itemBeauty] of items) {
//             // get item with price <= current query
//             // obtain max beauty for an item with above criteria
//             if (itemPrice <= query) {
//                 currentMaxBeautyValue = Math.max(currentMaxBeautyValue, itemBeauty);
//             }
//         }
//         // add this max amount to results
//         maxBeauties.push(currentMaxBeautyValue);
//     }

//     return maxBeauties;
// }

// /**
//  * solution 2 -- sort & binary search
//  * time: O((m + n) * log m)
//  * space: O(n + m)
//  * 
//  * @param {number[][]} items
//  * @param {number[]} queries
//  * @return {number[]}
//  */
// function maximumBeauty(items, queries) {
//     items.sort(function sortByPrice(itemA, itemB) {
//         const itemAPrice = itemA[0];
//         const itemBPrice = itemB[0];
        
//         return itemAPrice - itemBPrice;
//     });
    
//     let priceBeauties = [];
//     let maxBeauty = 0;

//     for (let [price, beauty] of items) {
//         maxBeauty = Math.max(maxBeauty, beauty);
//         priceBeauties.push([price, maxBeauty]);
//     }

//     return queries.map(function getMaxBeauties(query) {
//         let left = 0;
//         let right = priceBeauties.length - 1;

//         while (left <= right) {
//             const midIndex = left + Math.floor((right - left) / 2);
//             const midPrice = priceBeauties[midIndex][0];

//             if (midPrice <= query) {
//                 left = midIndex + 1;
//             } else {
//                 right = midIndex - 1;
//             }
//         }

//         if (right >= 0) {
//             const beautyVal = priceBeauties[right][1];

//             return beautyVal;
//         } else {
//             return 0;
//         }
//     });
// }

/**
 * solution 3 -- sort items and queries, then sliding pointer approach
 * time: O((n * log n) + (m * log m))
 * space: O(n + m)
 * 
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
function maximumBeauty(items, queries) {
    items.sort(function sortByPrice(itemA, itemB) {
        const itemAPrice = itemA[0];
        const itemBPrice = itemB[0];
        
        return itemAPrice - itemBPrice;
    });

    let queriesTuples = []; // each tuple is [query, queryIndex]

    for (let i = 0; i < queries.length; i++) {
        queriesTuples.push([queries[i], i]);
    }

    queriesTuples.sort(function sortByQueryValues(tupleA, tupleB) {
        return tupleA[0] - tupleB[0];
    });

    let results = new Array(queries.length);
    let maxBeauty = 0;
    let j = 0;

    for (let [query, queryIndex] of queriesTuples) {
        // while j less than items list length AND
        // item price is less than or equal to current query
        while (j < items.length && items[j][0] <= query) {
            maxBeauty = Math.max(maxBeauty, items[j][1]);
            j++;
        }

        results[queryIndex] = maxBeauty;
    }

    return results;
}

console.log(maximumBeauty([[1, 2], [3, 2], [2, 4], [5, 6], [3, 5]], [1, 2, 3, 4, 5, 6]));
// [2,4,5,5,6,6]
console.log(maximumBeauty([[1, 2], [1, 2], [1, 3], [1, 4]], [1]));
// [4]
