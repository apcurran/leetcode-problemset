// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} colors
//  * @return {number}
//  */
// function maxDistance(colors) {
//     let max = 0;

//     // try every house color combo
//     for (let i = 0; i < colors.length; i++) {
//         const house1 = colors[i];

//         for (let j = i + 1; j < colors.length; j++) {
//             const house2 = colors[j];
//             if (house1 !== house2) {
//                 const currentDistance = j - i;
//                 max = Math.max(max, currentDistance);
//             }
//         }
//     }

//     return max;
// }

/**
 * solution 2 -- two-pass
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} colors
 * @return {number}
 */
function maxDistance(colors) {
    let max = 0;

    // static first house, find the furthest house with a diff color
    for (let i = colors.length - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            // current dist (i - 0)
            max = Math.max(max, i);

            break;
        }
    }

    // static last house, find the furthest house with a diff color
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== colors.at(-1)) {
            const currentDistance = colors.length - 1 - i;
            max = Math.max(max, currentDistance);

            break;
        }
    }

    return max;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3])); // 4
console.log(maxDistance([0, 1])); // 1
