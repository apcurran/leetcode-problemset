"use strict";

/**
 * solution 1
 * time: O(n * (n + log n))
 * space: O(n)
 * 
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
function sortPeople(names, heights) {
    let namesWithHeights = names.map((name, index) => {
        const height = heights[index];

        return `${name}:${height}`;
    });

    namesWithHeights.sort((person1, person2) => {
        const person1Height = +person1.split(":")[1];
        const person2Height = +person2.split(":")[1];

        return person2Height - person1Height;
    });

    for (let i = 0; i < namesWithHeights.length; i++) {
        namesWithHeights[i] = namesWithHeights[i].split(":")[0];
    }
    
    return namesWithHeights;
}

console.log( sortPeople(["Mary", "John", "Emma"], [180, 165, 170]) ); // ["Mary","Emma","John"]
