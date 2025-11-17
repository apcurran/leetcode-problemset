// /**
//  * solution 1
//  * n = nums length
//  * m = onesIndices length
//  * time: O(n + m)
//  * space: O(m)
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// function kLengthApart(nums, k) {
//     let onesIndices = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             onesIndices.push(i);
//         }
//     }

//     for (let i = 0; i < onesIndices.length - 1; i++) {
//         const current = onesIndices[i];
//         const next = onesIndices[i + 1];
//         const diff = next - current;

//         if (diff <= k) {
//             return false;
//         }
//     }

//     return true;
// }

/**
 * solution 2
 * n = nums length
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
    let spacesBetweenOnesNeighbors = k;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (spacesBetweenOnesNeighbors < k) {
                return false;
            }

            spacesBetweenOnesNeighbors = 0;
        } else {
            spacesBetweenOnesNeighbors++;
        }
    }

    return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false
