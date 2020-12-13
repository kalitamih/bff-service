"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathListProducts = exports.productService = exports.Services = void 0;
require('dotenv').config();
exports.Services = {
    cart: process.env.CART,
    product: process.env.PRODUCT
};
exports.productService = 'product';
exports.pathListProducts = '/products';
//# sourceMappingURL=index.js.map