export declare class CacheService {
    private _cache;
    private _ttl;
    constructor();
    set(val: any): void;
    get(): Promise<any>;
}
