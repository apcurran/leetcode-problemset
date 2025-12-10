"use strict";

/**
 * solution 1 -- Promise.all()
 * time: O(max(n, m))
 * space: O(1)
 *
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
async function addTwoPromises(promise1, promise2) {
    try {
        const [promise1Value, promise2Value] = await Promise.all([promise1, promise2]);

        return promise1Value + promise2Value;
    } catch (err) {
        console.error(err);
    }
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
