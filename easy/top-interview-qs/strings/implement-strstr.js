"use strict";

/**
 * Return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle === "") return 0;

    return haystack.indexOf(needle);
}

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("", ""));
