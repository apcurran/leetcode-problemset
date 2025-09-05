"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
function findClosest(x, y, z) {
    // take abs val of diff for y - z and z - x
    const person1Distance = Math.abs(x - z);
    const person2Distance = Math.abs(y - z);

    // get the lowest val and return person # identifier
    if (person1Distance === person2Distance) {
        return 0;
    } else if (person1Distance < person2Distance) {
        return 1;
    } else {
        return 2;
    }
}

console.log(findClosest(2, 7, 4)); // 1
console.log(findClosest(2, 5, 6)); // 2
console.log(findClosest(1, 5, 3)); // 0
