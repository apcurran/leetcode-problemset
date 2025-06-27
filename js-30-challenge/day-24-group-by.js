"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {Function} fn
 * @return {object}
 */
Array.prototype.groupBy = function(fn) {
    const currentArr = this;
    let result = {};

    for (let elem of currentArr) {
        const key = fn(elem);

        if (Object.hasOwn(result, key)) {
            result[key].push(elem);
        } else {
            result[key] = [elem];
        }
    }

    return result;
};


console.log( [1, 2, 3].groupBy(String) ); // {"1":[1],"2":[2],"3":[3]}
