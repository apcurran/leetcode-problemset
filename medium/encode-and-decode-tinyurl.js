"use strict";

let hashMap = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * time: O(1)
 * space: O(1)
 *
 * @param {string} longUrl
 * @return {string}
 */
function encode(longUrl) {
    // I would use window.crypto.randomUUID() method here
    // but it will not work for LeetCode submission.
    const code = Math.random().toString(32).slice(5);
    const tinyURL = `https://tinyurl.com/${code}`;
    hashMap.set(tinyURL, longUrl);

    return tinyURL;
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * time: O(1)
 * space: O(1)
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
    return hashMap.get(shortUrl);
}
