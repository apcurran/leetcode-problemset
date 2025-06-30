"use strict";

// /**
//  * solution 1
//  * n = number of key/value pairs (JSON stringification)
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {Object | Array} obj
//  * @return {boolean}
//  */
// function isEmpty(obj) {
//     const strObj = JSON.stringify(obj);

//     return strObj === "{}" || strObj === "[]";
// }

/**
 * solution 2
 * n = number of key/value pairs
 * time: O(n)
 * space: O(1)
 *
 * @param {Object | Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
    for (let property in obj) {
        // if there is any property,
        // then this is not an empty object
        return false;
    }

    return true;
}

console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
