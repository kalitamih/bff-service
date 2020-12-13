import { Injectable } from '@nestjs/common';
const NodeCache = require( "node-cache" );

@Injectable()
export class CacheService {
    private _cache;
    private _ttl = 120;

    constructor() {
       this._cache = new NodeCache();
    }   

    public set(val: any) {
        this._cache.mset([
            {key: "products", val, ttl: this._ttl},
        ])      
    }

    public async get() {
        return this._cache.get("products");
    }
}
