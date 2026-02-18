// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function hasAlternatingBits(n) {
//     const binaryN = n.toString(2);

//     for (let i = 0; i < binaryN.length - 1; i++) {
//         const currentBit = binaryN[i];
//         const nextBit = binaryN[i + 1];

//         if (currentBit === nextBit) {
//             return false;
//         }
//     }

//     return true;
// }

// /**
//  * solution 2 -- remainder and modulo operators for bit checking
//  * w <= 32 bits
//  * time: O(w)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function hasAlternatingBits(n) {
//     let lastBit = n % 2;
//     n = Math.floor(n / 2);

//     while (n > 0) {
//         const currentBit = n % 2;

//         if (currentBit === lastBit) {
//             return false;
//         }

//         lastBit = currentBit;
//         n = Math.floor(n / 2);
//     }

//     return true;
// }

/**
 * solution 3 -- bitwise operators
 * w <= 32 bits
 * time: O(w)
 * space: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
    let lastBit = n & 1; // rightmost bit
    n >>= 1; // shift n right 1 place

    while (n > 0) {
        const currentBit = n & 1;

        if (currentBit === lastBit) {
            return false;
        }

        lastBit = currentBit;
        n >>= 1; // get the next bit into checking position
    }

    return true;
}

console.log(hasAlternatingBits(5)); // true
console.log(hasAlternatingBits(7)); // false
console.log(hasAlternatingBits(11)); // false
