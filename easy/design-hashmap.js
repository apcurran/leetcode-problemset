// solution 1 -- object
// class MyHashMap {
//     constructor() {
//         this.hash = {};
//     }

//     /**
//      * inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value
//      *
//      * @param {number} key
//      * @param {number} value
//      * @return {void}
//      */
//     put(key, value) {
//         // otherwise, add new key/val pair
//         this.hash[key] = value;
//     }

//     /**
//      * returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
//      *
//      * @param {number} key
//      * @return {number}
//      */
//     get(key) {
//         if (Object.hasOwn(this.hash, key)) {
//             return this.hash[key];
//         } else {
//             return -1;
//         }
//     }

//     /**
//      * removes the key and its corresponding value if the map contains the mapping for the key
//      *
//      * @param {number} key
//      * @return {void}
//      */
//     remove(key) {
//         delete this.hash[key];

//         return;
//     }
// }

// solution 2 -- array
class MyHashMap {
    constructor() {
        this.data = Array.from({ length: 1_000_001 });
    }

    /**
     * inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value
     *
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // otherwise, add new key/val pair
        this.data[key] = value;
    }

    /**
     * returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     *
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const value = this.data[key];

        if (value !== undefined) {
            return value;
        } else {
            return -1;
        }
    }

    /**
     * removes the key and its corresponding value if the map contains the mapping for the key
     *
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.data[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
