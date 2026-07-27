// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n) -- string conversion of n
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function maxProduct(n) {
//     const strN = String(n);
//     let largestProduct = -Infinity;

//     for (let i = 0; i < strN.length; i++) {
//         const currentDigit = Number(strN[i]);

//         for (let j = i + 1; j < strN.length; j++) {
//             const nextDigit = Number(strN[j]);
//             const currentProduct = currentDigit * nextDigit;
//             largestProduct = Math.max(largestProduct, currentProduct);
//         }
//     }

//     return largestProduct;
// }

/**
 * solution 2
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function maxProduct(n) {
    let digitA = 0;
    let digitB = 0;

    while (n > 0) {
        let x = n % 10;

        if (x > digitA) {
            digitB = digitA;
            digitA = x;
        } else if (x > digitB) {
            digitB = x;
        }

        // either way, move to the next digit
        n = Math.floor(n / 10);
    }

    return digitA * digitB;
}

console.log(maxProduct(31)); // 3
console.log(maxProduct(22)); // 4
console.log(maxProduct(124)); // 8
