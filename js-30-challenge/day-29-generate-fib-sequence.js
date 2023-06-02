"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @return {Generator<number>}
 */
function* fibGenerator() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;

        const temp = a;
        a = b;
        b += temp;
    }
}

const gen = fibGenerator();
console.log (gen.next().value ); // 0
console.log (gen.next().value ); // 1
