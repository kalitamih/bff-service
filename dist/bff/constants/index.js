"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathListProducts = exports.productService = exports.Services = void 0;
require('dotenv').config();
exports.Services = {
    cart: process.env.CART || 'http://kalitamih-cart-api-prod.eu-west-1.elasticbeanstalk.com/api',
    product: process.env.PRODUCT || 'https://z2gow2hl38.execute-api.eu-west-1.amazonaws.com/prod'
};
exports.productService = 'product';
exports.pathListProducts = '/products';
//# sourceMappingURL=index.js.map