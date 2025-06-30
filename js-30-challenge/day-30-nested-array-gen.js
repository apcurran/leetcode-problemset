"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {Array} arr
 * @return {Generator}
 */
function* inorderTraversal(arr) {
    yield* arr.flat(Infinity);
}

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

const gen2 = inorderTraversal([[[[[]]]]]);
console.log(gen2.next().value); // []
console.log(gen2.next().value); // []
console.log(gen2.next().value); // []
