"use strict";

/**
 * solution 1
 * n = number of key/value pairs (JSON stringification)
 * time: O(n)
 * space: O(n)
 * 
 * @param {Object | Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
    const strObj = JSON.stringify(obj);

    return strObj === "{}" || strObj === "[]";
}

console.log( isEmpty({}) ); // true
console.log( isEmpty([]) ); // true
