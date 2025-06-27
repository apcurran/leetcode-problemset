// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// function countPairs(nums, target) {
//     let sumsLessThanTargetCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const num1 = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             const num2 = nums[j];
//             const currentSum = num1 + num2;

//             // check if num1 and num2 sum is less than target
//             if (currentSum < target) {
//                 sumsLessThanTargetCount++;
//             }
//         }
//     }

//     return sumsLessThanTargetCount;
// }

/**
 * solution 2 -- two pointers
 * time: O(n * log n) -- sort
 * space: O(n) -- sort
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function countPairs(nums, target) {
    nums.sort((a, b) => a - b); // ASC order
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let pairsCount = 0;

    while (leftPointer < rightPointer) {
        const num1 = nums[leftPointer];
        const num2 = nums[rightPointer];
        const sum = num1 + num2;

        if (sum < target) {
            pairsCount += rightPointer - leftPointer;
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return pairsCount;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2)); // 3
