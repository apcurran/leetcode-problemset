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
    const oneDimensionalArr = arr.flat(Infinity);

    for (let value of oneDimensionalArr) {
        yield value;
    }
}


// const gen = inorderTraversal([1, [2, 3]]);
// console.log( gen.next().value ); // 1
// console.log( gen.next().value ); // 2
// console.log( gen.next().value ); // 3

const gen = inorderTraversal([[[[[]]]]]);
console.log( gen.next().value ); // []
console.log( gen.next().value ); // []
console.log( gen.next().value ); // []
