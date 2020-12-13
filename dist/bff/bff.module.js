"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BffModule = void 0;
const common_1 = require("@nestjs/common");
const bff_service_1 = require("./bff.service");
const bff_controller_1 = require("./bff.controller");
const cache_service_1 = require("./cache.service");
let BffModule = class BffModule {
};
BffModule = __decorate([
    common_1.Module({
        providers: [bff_service_1.BffService, cache_service_1.CacheService],
        controllers: [bff_controller_1.BffController]
    })
], BffModule);
exports.BffModule = BffModule;
//# sourceMappingURL=bff.module.js.map