"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
    if (obj === undefined || obj === null || typeof classFunction !== "function") {
        return false;
    }

    let currentPrototype = Object.getPrototypeOf(obj);

    while (currentPrototype !== null) {
        if (currentPrototype === classFunction.prototype) {
            return true;
        } else {
            // move along the chain to continue searching
            currentPrototype = Object.getPrototypeOf(currentPrototype);
        }
    }

    return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // true
