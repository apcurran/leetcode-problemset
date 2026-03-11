// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function bitwiseComplement(n) {
//     const nBinaryStr = n.toString(2);
//     let resultBinaryStr = "";

//     for (let bitStr of nBinaryStr) {
//         if (bitStr === "0") {
//             resultBinaryStr += "1";
//         } else {
//             resultBinaryStr += "0";
//         }
//     }

//     return parseInt(resultBinaryStr, 2);
// }

/**
 * solution 2 -- bitwise operators and bitmask
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function bitwiseComplement(n) {
    if (n === 0) {
        return 1;
    }

    let mask = 1;

    // shift mask left until it covers all bits of binary n
    while (mask <= n) {
        mask = mask << 1;
    }

    const allOnesMask = mask - 1;

    return n ^ allOnesMask; // flip bits with mask
}

console.log(bitwiseComplement(5)); // 2
console.log(bitwiseComplement(7)); // 0
console.log(bitwiseComplement(10)); // 5
