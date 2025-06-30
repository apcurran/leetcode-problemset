"use strict";

/**
 * A defanged IP address replaces every period "." with "[.]".
 *
 * Time: O(n) - Iteration of a string under the hood is linear time
 * Space: O(n)
 *
 * @param {string} address
 * @return {string}
 */
function defangIPaddr(address) {
    const myRegex = /\./g;

    return address.replace(myRegex, "[.]");
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"
