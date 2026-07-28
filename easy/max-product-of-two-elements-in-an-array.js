// /**
//  * solution 1 -- sort
//  * time: O(n * log n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxProduct(nums) {
//     nums.sort(function sortDesc(a, b) {
//         return b - a;
//     });

//     const a = nums[0];
//     const b = nums[1];

//     return (a - 1) * (b - 1);
// }

/**
 * solution 2 -- linear iteration with tracking
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let biggest = 0;
    let secondBiggest = 0;

    for (let num of nums) {
        if (num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        } else {
            // only replace secondBiggest if the current num
            // is indeed larger
            secondBiggest = Math.max(secondBiggest, num);
        }
    }

    return (biggest - 1) * (secondBiggest - 1);
}

console.log(maxProduct([3, 4, 5, 2])); // 12
console.log(maxProduct([1, 5, 4, 5])); // 16
