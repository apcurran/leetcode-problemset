"use strict";

/**
 * solution 1 -- hashset
 * n = rooms length
 * m = keys length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    let accessibleRooms = new Set([0]);

    for (let room of accessibleRooms) {
        const keys = rooms[room];

        for (let key of keys) {
            accessibleRooms.add(key);
        }
    }

    return accessibleRooms.size === rooms.length;
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])); // false
