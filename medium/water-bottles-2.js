/**
 * solution 1 -- simulation
 * time: O(sqrt(n))
 * space: O(1)
 *
 * @param {number} fullBottles
 * @param {number} numExchange
 * @return {number}
 */
function maxBottlesDrunk(fullBottles, numExchange) {
    let emptyBottles = fullBottles;
    let totalBottlesDrunk = fullBottles;

    // empty bottles must be >= numExchange to continue
    while (emptyBottles >= numExchange) {
        totalBottlesDrunk++;
        emptyBottles -= numExchange - 1;
        numExchange++;
    }

    return totalBottlesDrunk;
}

console.log(maxBottlesDrunk(13, 6)); // 15
console.log(maxBottlesDrunk(10, 3)); // 13
