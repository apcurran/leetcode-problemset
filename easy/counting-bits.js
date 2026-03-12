// /**
//  * solution 1
//  * n = input n number
//  * m = bin ones count for each bin number i of arr
//  *
//  * time: O(n * m)
//  * space: O(m)
//  *
//  * @param {number} n
//  * @return {number[]}
//  */
// function countBits(n) {
//     let resArr = [];

//     for (let i = 0; i <= n; i++) {
//         const binNum = i.toString(2);
//         let onesBitsCount = 0;

//         for (let binDigitStr of binNum) {
//             if (binDigitStr === "1") onesBitsCount++;
//         }

//         resArr.push(onesBitsCount);
//     }

//     return resArr;
// }

/**
 * solution 2
 * n = input n number
 * m = bin ones count for each bin number i of arr
 *
 * time: O(n * log n)
 * space: O(1) -- not including results
 *
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    let results = [];

    for (let num = 0; num <= n; num++) {
        let numOnesBitsCount = 0;

        for (let j = 0; j < 32; j++) {
            // check for ith bit set (1 bit)
            if ((num & (1 << j)) !== 0) {
                numOnesBitsCount++;
            }
        }

        results.push(numOnesBitsCount);
    }

    return results;
}

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
