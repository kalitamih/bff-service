import { CacheService } from './cache.service';
export declare class BffService {
    private _cacheService;
    private services;
    constructor(_cacheService: CacheService);
    request(service: string, url: string, method: any, body: any): Promise<any>;
}
