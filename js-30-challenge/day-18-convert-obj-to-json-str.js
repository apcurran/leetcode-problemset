"use strict";

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {any} object
 * @return {string}
 */
function jsonStringify(object) {
    if (object === null) {
        return "null";
    }

    // array
    if (Array.isArray(object)) {
        const values = object.map((obj) => jsonStringify(obj));
        const valuesStr = values.join(",");

        return `[${valuesStr}]`;
    }

    // object
    if (typeof object === "object") {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map((key) => {
            const strKey = `"${key}"`;
            const strValue = jsonStringify(object[key]);

            return `${strKey}:${strValue}`;
        });
        const keyValuePairsStr = keyValuePairs.join(",");

        return `{${keyValuePairsStr}}`;
    }

    // string
    if (typeof object === "string") {
        return `"${object}"`;
    }

    // boolean or num after checking for prev types
    return String(object);
}

console.log( jsonStringify({"y":1,"x":2}) ); // {"y":1,"x":2}
