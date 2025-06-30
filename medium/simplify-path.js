"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    const splitText = path.split("/");
    let stack = [];

    for (let segment of splitText) {
        if (segment === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (segment !== "" && segment !== ".") {
            stack.push(segment);
        }
    }

    const revisedPath = stack.join("/");

    return `/${revisedPath}`;
}

console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/../")); // "/"
