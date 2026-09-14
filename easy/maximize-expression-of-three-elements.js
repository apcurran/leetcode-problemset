// /**
//  * solution 1 -- sort
//  * time: O(n * log n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maximizeExpressionOfThree(nums) {
//     nums.sort(function sortDesc(a, b) {
//         return b - a;
//     });

//     // add two largest elems
//     const a = nums[0];
//     const b = nums[1];
//     // sub one smallest elem
//     const c = nums.at(-1);

//     return a + b - c;
// }

/**
 * solution 2 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function maximizeExpressionOfThree(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min = Infinity;

    for (let currentNum of nums) {
        if (currentNum >= max1) {
            max2 = max1;
            max1 = currentNum;
        } else if (currentNum >= max2) {
            max2 = currentNum;
        }

        min = Math.min(min, currentNum);
    }

    return max1 + max2 - min;
}

console.log(maximizeExpressionOfThree([1, 4, 2, 5])); // 8
console.log(maximizeExpressionOfThree([-2, 0, 5, -2, 4])); // 11
