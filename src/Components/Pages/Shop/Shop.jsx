import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Shop = () => {
    const products = useLoaderData();
    return (
        <div className=''>
                <h1>Shop</h1>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 my-10'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
        </div>
    );
};

export default Shop;