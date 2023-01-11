/**
 * solution 1
 * n = Max(items1, items2)
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
function mergeSimilarItems(items1, items2) {
    // create a cache for val -> combinedWeight
    let itemsCache = new Map();

    for (let [itemValue, itemWeight] of items1) {
        const itemPreviousWeight = itemsCache.get(itemValue) || 0;
        itemsCache.set(itemValue, itemPreviousWeight + itemWeight);
    }

    for (let [itemValue, itemWeight] of items2) {
        const itemPreviousWeight = itemsCache.get(itemValue) || 0;
        itemsCache.set(itemValue, itemPreviousWeight + itemWeight);
    }

    const resultsSortedByValue = [...itemsCache.entries()].sort((arrA, arrB) => {
        if (arrA[0] > arrB[0]) {
            return 1;
        } else {
            return -1;
        }
    });

    return resultsSortedByValue;
}

console.log( mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]) ); // [[1,6],[3,9],[4,5]]
