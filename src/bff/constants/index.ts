require('dotenv').config()

export const Services = {
    cart: process.env.CART || 'http://kalitamih-cart-api-prod.eu-west-1.elasticbeanstalk.com/api',
    product: process.env.PRODUCT || 'https://z2gow2hl38.execute-api.eu-west-1.amazonaws.com/prod'
}

export const productService = 'product';

export const pathListProducts = '/products';