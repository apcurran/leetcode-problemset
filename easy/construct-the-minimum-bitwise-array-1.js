/**
 * solution 1 -- bitwise OR
 * time: O(n * m)
 * space: O(1) -- not including results array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function minBitwiseArray(nums) {
    let results = [];

    for (let target of nums) {
        let value = -1; // default

        for (let j = 1; j < target; j++) {
            if ((j | (j + 1)) === target) {
                value = j;

                break;
            }
        }

        results.push(value);
    }

    return results;
}

console.log(minBitwiseArray([2, 3, 5, 7])); // [-1,1,4,3]
