require('dotenv').config()

export const Services = {
    cart: process.env.CART,
    product: process.env.PRODUCT
}

export const productService = 'product';

export const pathListProducts = '/products';