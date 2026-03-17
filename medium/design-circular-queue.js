/**
 * solution 1 -- array-based implementation
 */
class MyCircularQueue {
    constructor(k) {
        this.queue = [];
        this.capacity = k;
    }
    /**
     * Inserts an element into the circular queue. Return true if the operation is successful.
     *
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.queue.length === this.capacity) {
            // cannot add past max capacity
            return false;
        }

        this.queue.push(value);

        return true;
    }

    /**
     * Deletes an element from the circular queue. Return true if the operation is successful.
     *
     * @return {boolean}
     */
    deQueue() {
        if (this.queue.length === 0) {
            // cannot remove from an empty queue
            return false;
        }

        this.queue.shift();

        return true;
    }

    /**
     * Gets the front item from the queue. If the queue is empty, return -1
     *
     * @return {number}
     */
    Front() {
        return this.queue.length === 0 ? -1 : this.queue[0];
    }

    /**
     * Gets the last item from the queue. If the queue is empty, return -1
     *
     * @return {number}
     */
    Rear() {
        return this.queue.length === 0 ? -1 : this.queue.at(-1);
    }

    /**
     * Checks whether the circular queue is empty or not.
     *
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    /**
     * Checks whether the circular queue is full or not.
     *
     * @return {boolean}
     */
    isFull() {
        return this.queue.length === this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
