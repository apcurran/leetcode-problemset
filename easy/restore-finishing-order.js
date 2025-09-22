// /**
//  * solution 1
//  * n = order length
//  * m = friends length
//  * time: O(n * m)
//  * space: O(n)
//  *
//  * @param {number[]} order
//  * @param {number[]} friends
//  * @return {number[]}
//  */
// function recoverOrder(order, friends) {
//     // remove all values in order that do not appear in friends
//     return order.filter(function removeNonFriends(value) {
//         return friends.includes(value);
//     });
// }

/**
 * solution 2 -- hashset
 * n = order length
 * m = friends length
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
function recoverOrder(order, friends) {
    const friendsSet = new Set(friends);

    return order.filter(function removeNonFriends(value) {
        return friendsSet.has(value);
    });
}

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4])); // [3, 1, 4]
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5])); // [5, 2]
