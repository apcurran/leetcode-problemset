"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {string[][]} paths
//  * @return {string}
//  */
// function destCity(paths) {
//     const startingCities = paths.map((city) => city[0]);
//     const destinationCities = paths.map((city) => city[1]);

//     return destinationCities
//             .filter((destination) => !startingCities.includes(destination))
//             .join("");
// }

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
    let hashSet = new Set();

    for (let pair of paths) {
        hashSet.add(pair[0]);
    }

    for (let pair of paths) {
        const destinationCity = pair[1];

        if (!hashSet.has(destinationCity)) {
            return destinationCity;
        }
    }
}

console.log(
    destCity([
        ["London", "New York"],
        ["New York", "Lima"],
        ["Lima", "Sao Paulo"],
    ]),
); // "Sao Paulo"
console.log(
    destCity([
        ["B", "C"],
        ["D", "B"],
        ["C", "A"],
    ]),
); // "A"
