"use strict";

/**
 * solution 1 -- regex replaceAll() method
 * time: O(n)
 * space: O(1)
 *
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
    command = command.replaceAll("()", "o");
    command = command.replaceAll("(al)", "al");

    return command;
}

console.log(interpret("G()(al)")); // "Goal"
