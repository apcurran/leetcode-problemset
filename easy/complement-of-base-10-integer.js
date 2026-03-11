/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function bitwiseComplement(n) {
    const nBinaryStr = n.toString(2);
    let resultBinaryStr = "";

    for (let bitStr of nBinaryStr) {
        if (bitStr === "0") {
            resultBinaryStr += "1";
        } else {
            resultBinaryStr += "0";
        }
    }

    return parseInt(resultBinaryStr, 2);
}

console.log(bitwiseComplement(5)); // 2
console.log(bitwiseComplement(7)); // 0
console.log(bitwiseComplement(10)); // 5
