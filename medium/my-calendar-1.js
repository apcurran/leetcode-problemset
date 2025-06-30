"use strict";
/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(n)
 */
class MyCalendar {
    constructor() {
        this.events = [];
    }

    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        for (let [eventStart, eventEnd] of this.events) {
            if (end > eventStart && start < eventEnd) {
                return false;
            }
        }

        this.events.push([start, end]);

        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
