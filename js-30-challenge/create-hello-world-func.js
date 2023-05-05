"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @return {Function}
 */
function createHelloWorld() {
    return function () {
        return "Hello World";
    };
}

const sayHi = createHelloWorld();
console.log( sayHi() ); // "Hello World"
