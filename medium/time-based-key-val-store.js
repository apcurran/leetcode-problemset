"use strict";

class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // default to empty array
        const updatedValue = this.store.get(key) || [];
        updatedValue.push([value, timestamp]);
        this.store.set(key, updatedValue);
    }

    /**
     * solution 1
     * time: O(log n)
     * space: O(n)
     *
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        /** @type {[][]} */
        const values = this.store.get(key) || [];
        let result = "";

        // run binary search to find timestamp <= provided timestamp
        let leftPointer = 0;
        let rightPointer = values.length - 1;

        while (leftPointer <= rightPointer) {
            const middle = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
            // get pair [value, timestamp] from values array at middle
            const currentPair = values[middle];
            const [currentWord, currentTimestamp] = currentPair;

            if (currentTimestamp === timestamp) {
                result = currentWord;

                return result;
            } else if (currentTimestamp < timestamp) {
                // current valid result (until/if a closer timestamp is found)
                result = currentWord;
                leftPointer = middle + 1;
            } else {
                rightPointer = middle - 1;
            }
        }

        return result;
    }
}
