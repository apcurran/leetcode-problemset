/**
 * solution 1 -- direct simulation
 * n = arr1 length
 * m = arr2 length
 * time: O(n * m)
 * space: O(1)
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d) {
    // only count arr 1 values that have no elems where |arr1[i]-arr2[j]| <= d
    let distanceVal = 0;

    arr1Loop: for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            const arr2value = arr2[j];
            const absDiff = Math.abs(arr1Value - arr2value);

            if (absDiff <= d) {
                // invalid, so skip some repeated work
                continue arr1Loop;
            }
        }

        // all pass
        distanceVal++;
    }

    return distanceVal;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1
