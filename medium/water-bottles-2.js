// /**
//  * solution 1 -- simulation
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {number} fullBottles
//  * @param {number} numExchange
//  * @return {number}
//  */
// function maxBottlesDrunk(fullBottles, numExchange) {
//     let emptyBottles = 0;
//     let totalBottlesDrunk = 0;

//     while (fullBottles > 0) {
//         totalBottlesDrunk += fullBottles;
//         emptyBottles += fullBottles;
//         fullBottles = 0;

//         // attempt exchange of old for 1 new bottle
//         if (emptyBottles >= numExchange) {
//             // pay exchange cost with empty bottles
//             emptyBottles -= numExchange;
//             // add 1 full bottle
//             fullBottles++;
//             // exchange rate increments by 1
//             numExchange++;
//         } else {
//             break;
//         }
//     }

//     return totalBottlesDrunk;
// }

/**
 * solution 2 -- simulation (enhanced!)
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
