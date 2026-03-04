class MyHashSet {
    constructor() {
        this.data = [];
    }

    /**
     * @param {any} key
     * @returns {void}
     */
    add(key) {
        if (this.data.includes(key)) return;

        this.data.push(key);
    }

    /**
     * @param {any} key
     * @returns {any[]} values array
     */
    remove(key) {
        const keyIndex = this.data.indexOf(key);

        if (keyIndex !== -1) {
            this.data.splice(keyIndex, 1);
        }

        return this.data;
    }

    /**
     * @param {any} key
     * @returns {boolean}
     */
    contains(key) {
        return this.data.includes(key);
    }
}
