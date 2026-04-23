/**
 * solution 1 -- brute force (TLE)
 * time: O(n^2)
 * space: O(1) -- exluding required results array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function distance(nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];

        let localSum = 0;
        // start at the beginning, skip index i
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            const num2 = nums[j];

            if (num1 === num2) {
                const absDiff = Math.abs(i - j);
                localSum += absDiff;
            }
        }

        results.push(localSum);
    }

    return results;
}

console.log(distance([1, 3, 1, 1, 2])); // [5, 0, 3, 4, 0]
