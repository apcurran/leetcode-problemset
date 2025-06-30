"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} celsius
 * @return {number[]}
 */
function convertTemperature(celsius) {
    const kelvinTemperature = celsius + 273.15;
    const fahrenheitTemperature = celsius * 1.8 + 32;

    return [kelvinTemperature, fahrenheitTemperature];
}

console.log(convertTemperature(36.5)); // [309.65000, 97.70000]
