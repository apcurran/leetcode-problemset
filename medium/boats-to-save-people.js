"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n * log n)
 * space: O(1)
 *
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
    // sort input arr
    people.sort((a, b) => a - b);

    let boatsCount = 0;
    // use two pointer technique
    let leftPointer = 0;
    let rightPointer = people.length - 1;

    while (leftPointer <= rightPointer) {
        // sub heaviest person from limit
        const remainingWeight = limit - people[rightPointer];
        rightPointer--;
        boatsCount++;

        // there is a person left and enough weight to hold the person
        if (
            leftPointer <= rightPointer &&
            remainingWeight >= people[leftPointer]
        ) {
            leftPointer++;
        }
    }

    return boatsCount;
}
