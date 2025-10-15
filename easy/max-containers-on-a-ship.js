/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
function maxContainers(n, w, maxWeight) {
    let sumWeight = 0;
    let totalContainers = 0;

    for (let i = 1; i <= n * n; i++) {
        if (sumWeight + w <= maxWeight) {
            // you may add another container
            sumWeight += w;
            totalContainers++;
        } else {
            break;
        }
    }

    return totalContainers;
}

console.log(maxContainers(2, 3, 4)); // 1
console.log(maxContainers(2, 3, 15)); // 4
console.log(maxContainers(3, 5, 20)); // 4
