/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
function minimumIndex(capacity, itemSize) {
    let smallestIndex = -1; // set default to -1
    let minCapacity = Infinity;

    for (let i = 0; i < capacity.length; i++) {
        const currCapacity = capacity[i];

        if (currCapacity >= itemSize && currCapacity < minCapacity) {
            smallestIndex = i;
            minCapacity = currCapacity;
        }
    }

    return smallestIndex;
}

console.log(minimumIndex([1, 5, 3, 7], 3)); // 2
console.log(minimumIndex([3, 5, 4, 3], 2)); // 0
console.log(minimumIndex([4], 5)); // -1
