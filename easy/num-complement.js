/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
    const binaryNumStr = num.toString(2);
    let invertedBinaryNumStr = "";
    
    for (let digit of binaryNumStr) {
        if (digit === "0") {
            invertedBinaryNumStr += "1";
        } else {
            invertedBinaryNumStr += "0";
        }
    }

    return parseInt(invertedBinaryNumStr, 2);
}

console.log( findComplement(5) ); // 2
console.log( findComplement(1) ); // 0
