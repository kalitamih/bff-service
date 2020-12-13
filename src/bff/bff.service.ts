import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { CacheService } from './cache.service';
import { pathListProducts, productService, Services } from './constants';

@Injectable()
export class BffService {
    private services = Services;

    constructor(private _cacheService: CacheService) {}   

    public async request(service: string, url: string, method, body) {
        if (!this.services[service]) {
            throw new HttpException('Cannot process request', 502);
        }

        if(service === productService && url === pathListProducts) {          
            const cachedData = this._cacheService.get();
            if(cachedData) {
                console.log('response from cache');
             
                return cachedData;
            }
        }

        const response = await axios({
            method: method,
            url: this.services[service] + url,
            data: method !== 'GET' ? body : null
        });

        if(service === productService && url === pathListProducts) {
           this._cacheService.set(response.data);
        }

        console.log('response from request');

        return response.data;
    }
}
