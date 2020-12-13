import { Injectable } from '@nestjs/common';
const NodeCache = require("node-cache");

@Injectable()
export class CacheService {
    private _cache;
    private _ttl = 120;

    constructor() {
       this._cache = new NodeCache();
    }   

    public async set(val: any) {
        console.log(val);
        console.log(this._ttl);
        
        await this._cache.set(
            "products", val, this._ttl,
        );      
    }

    public async get() {
        console.log('get');
        console.log(this._cache.keys());
        return this._cache.get("products");
    }
}
