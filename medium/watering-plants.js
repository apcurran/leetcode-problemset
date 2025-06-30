"use strict";

/**
 * Solution 1
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
function wateringPlants(plants, capacity) {
    // Init a steps counter
    let stepsCounter = 0;
    // Init a water capacity copy
    let canCapacityCopy = capacity;

    for (let i = 0; i < plants.length; i++) {
        const currPlantWateringAmt = plants[i];

        if (canCapacityCopy < currPlantWateringAmt) {
            // Go back and refill can before proceeding to water
            const stepsToWalkBackForRefill = i;
            // Reset cap back to original amt after refilling
            canCapacityCopy = capacity;
            // Walk back to last plant that you left off at
            const stepsToWalkBackToPlant = i + 1;

            // Incr steps counter by total steps back and forward
            stepsCounter += stepsToWalkBackForRefill + stepsToWalkBackToPlant;
            // Subtract water amt from can
            canCapacityCopy -= currPlantWateringAmt;
        } else {
            // Otherwise, water the plant and decr water amt
            canCapacityCopy -= currPlantWateringAmt;
            // Inc steps counter with curr steps amt
            stepsCounter += 1;
        }
    }
    // Once all plants have been watered, return the steps counter
    return stepsCounter;
}

console.log(wateringPlants([2, 2, 3, 3], 5)); // 14
console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4)); // 30
console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)); // 49
console.log(wateringPlants([3, 2, 4, 2, 1], 6)); // 17
