/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1) -- not including required results array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function countOppositeParity(nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        const outerNum = nums[i];
        let counter = 0;

        for (let j = i + 1; j < nums.length; j++) {
            const innerNum = nums[j];

            if (outerNum % 2 === innerNum % 2) {
                // check innerNum even/odd (they must be diff)
                continue;
            }

            // if diff, incr counter
            counter++;
        }

        results.push(counter);
        // reset counter state
        counter = 0;
    }

    return results;
}

console.log(countOppositeParity([1, 2, 3, 4])); // [2, 1, 1, 0]
console.log(countOppositeParity([1])); // [0]
