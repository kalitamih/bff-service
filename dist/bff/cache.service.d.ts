export declare class CacheService {
    private _cache;
    private _ttl;
    constructor();
    set(val: any): Promise<void>;
    get(): Promise<any>;
}
