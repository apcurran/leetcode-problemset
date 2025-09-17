"use strict";

/**
 * solution 1 -- binary search
 * n = range size
 * w = weights length
 * time: O(n * w)
 * space: O(1)
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function shipWithinDays(weights, days) {
    let left = getMax(weights);
    let right = weights.reduce((sum, curr) => sum + curr, 0);
    let result = right; // init at range upper bound

    while (left <= right) {
        const capacity = Math.floor((left + right) / 2);

        if (canShip(weights, capacity, days)) {
            result = Math.min(result, capacity);
            right = capacity - 1;
        } else {
            left = capacity + 1;
        }
    }

    return result;
}

// HELPER FUNCS
/**
 * @param {number[]} weights
 * @param {number} capacity
 * @param {number} days
 * @returns {boolean}
 */
function canShip(weights, capacity, days) {
    let ships = 1;
    let currentCapacity = capacity;

    for (let weight of weights) {
        if (currentCapacity - weight < 0) {
            ships++;
            currentCapacity = capacity;
        }

        currentCapacity -= weight;
    }

    return ships <= days;
}

// /**
//  * solution 2 -- linear search brute force (correct, but TLE)
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} weights
//  * @param {number} days
//  * @return {number}
//  */
// function shipWithinDays(weights, days) {
//     let result = getMax(weights);

//     while (true) {
//         let ships = 1;
//         let capacity = result; // upper bound

//         for (let weight of weights) {
//             if (capacity - weight < 0) {
//                 ships++;
//                 capacity = result;
//             }

//             capacity -= weight;
//         }

//         if (ships <= days) {
//             return result;
//         }

//         result++;
//     }
// }

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15

/**
 * @param {number[]} nums
 * @returns {number}
 */
function getMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    return max;
}
