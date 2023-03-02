const redis = require("redis");
const bluebird = require("bluebird");

import { REDIS } from './config'

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const cacheConnection = redis.createClient(6380, REDIS.REDISCACHEHOSTNAME, {
    auth_pass: REDIS.REDISCACHEKEY, tls: { servername: REDIS.REDISCACHEHOSTNAME }
});

export const setProduct = async(key: string, maskSnapshot: any) => {
    console.log("\nCache command: SET Message");
    cacheConnection.setAsync(key, JSON.stringify(maskSnapshot));
}

export const getProduct = async (key: string) => {
    console.log("\nCache command: GET Message");
    const masCache = await cacheConnection.getAsync(key);
    return JSON.parse(masCache);
}