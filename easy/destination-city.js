"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
    const startingCities = paths.map((city) => city[0]);
    const destinationCities = paths.map((city) => city[1]);

    return destinationCities
            .filter((destination) => !startingCities.includes(destination))
            .join("");
}

console.log( destCity([["London","New York"], ["New York","Lima"], ["Lima","Sao Paulo"]]) ); // "Sao Paulo"
console.log( destCity([["B","C"], ["D","B"], ["C","A"]]) ); // "A"
