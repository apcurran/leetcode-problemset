/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    const just1s = n.toString().replace(/0+/g, "");
    console.log(just1s);
}

console.log( hammingWeight(00000000000000000000000000001011) ); // 3