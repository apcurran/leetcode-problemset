"use strict";

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
        const valueInCache = this.cache.get(key);

        if (valueInCache) {
            clearTimeout(valueInCache.timeout);
        }

        const timeout = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, timeout });

        return Boolean(valueInCache);
    }

    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    /**
     * @return {number} count of non-expired keys
     */
    count() {
        return this.cache.size;
    }
}

const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
