"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BffService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cache_service_1 = require("./cache.service");
const constants_1 = require("./constants");
let BffService = class BffService {
    constructor(_cacheService) {
        this._cacheService = _cacheService;
        this.services = constants_1.Services;
    }
    async request(service, url, method, body) {
        console.log(service);
        console.log(this.services);
        if (!this.services[service]) {
            throw new common_1.HttpException('Cannot process request', 502);
        }
        console.log(service);
        if (service === constants_1.productService && url === constants_1.pathListProducts) {
            const cachedData = await this._cacheService.get();
            console.log(cachedData);
            if (cachedData) {
                console.log('response from cache');
                return cachedData;
            }
        }
        const response = await axios_1.default({
            method: method,
            url: this.services[service] + url,
            data: method !== 'GET' ? body : null
        });
        if (service === constants_1.productService && url === constants_1.pathListProducts) {
            await this._cacheService.set(response.data);
        }
        console.log('response from request');
        return response.data;
    }
};
BffService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cache_service_1.CacheService])
], BffService);
exports.BffService = BffService;
//# sourceMappingURL=bff.service.js.map