/**
 * solution 1
 * time: O(k * log k * (n - k + 1))
 * space: O(k)
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findXSum(nums, k, x) {
    /** @type {number[]}  */
    let results = [];

    for (let i = 0; i < nums.length - k + 1; i++) {
        // get hashmap of counts for nums and occurences in subarray
        // iterate i .... i + k (exclusive)
        const subarray = nums.slice(i, i + k);
        let counts = new Map();

        for (let value of subarray) {
            const previousCount = counts.get(value) || 0;
            counts.set(value, previousCount + 1);
        }

        // subarray size too small
        if (counts.size < x) {
            results.push(calcSum(subarray));
        } else {
            // Keep only the occurrences of the top x most frequent elements.
            // If two elements have the same number of occurrences,
            // the element with the bigger value is considered more frequent.
            const sortedTuples = [...counts.entries()].toSorted(
                function sortByCountThenValue(a, b) {
                    const [aValue, aCount] = a;
                    const [bValue, bCount] = b;

                    if (bCount !== aCount) {
                        return bCount - aCount; // higher count first
                    } else {
                        return bValue - aValue; // tie, take biggest value
                    }
                },
            );

            let sum = 0;

            for (let j = 0; j < x; j++) {
                const product = sortedTuples[j][0] * sortedTuples[j][1];
                sum += product;
            }

            results.push(sum);
        }
    }

    return results;
}

/**
 * @param {number[]} values
 * @returns {number}
 */
function calcSum(values) {
    let sum = 0;

    for (let value of values) {
        sum += value;
    }

    return sum;
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2)); // [6, 10, 12]
