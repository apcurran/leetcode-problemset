/**
 * solution 1 -- brute force
 * time: O(1)
 * space: O(1)
 *
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const aStart = parseDate(arriveAlice);
    const aEnd = parseDate(leaveAlice);
    const bStart = parseDate(arriveBob);
    const bEnd = parseDate(leaveBob);
    let counter = 0;

    for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= DAYS_IN_MONTH[month - 1]; day++) {
            const today = month * 100 + day;
            const aliceHere = aStart <= today && today <= aEnd;
            const bobHere = bStart <= today && today <= bEnd;

            if (aliceHere && bobHere) {
                counter++;
            }
        }
    }

    return counter;
}

/**
 * @param {string} date - ex. "08-15"
 * @returns {number} -> ex. 815
 */
function parseDate(date) {
    const month = parseInt(date.slice(0, 2), 10);
    const day = parseInt(date.slice(3), 10);

    return month * 100 + day;
}
