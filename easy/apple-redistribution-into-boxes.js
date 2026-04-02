/**
 * solution -- greedy (sum and sort)
 * n = apple length
 * m = capacities length
 * time: O(n + m * log m)
 * space: O(m)
 *
 * @param {number[]} apple
 * @param {number[]} capacities
 * @return {number}
 */
function minimumBoxes(apple, capacities) {
    let applesSum = apple.reduce((sum, curr) => sum + curr, 0);
    capacities.sort(function sortDesc(a, b) {
        return b - a;
    });

    let necessaryBoxesCount = 0;

    while (applesSum > 0) {
        applesSum -= capacities[necessaryBoxesCount];
        necessaryBoxesCount++;
    }

    return necessaryBoxesCount;
}

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])); // 2
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7])); // 4
