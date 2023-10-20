import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Shop = () => {
    const products = useLoaderData();
    return (
        <div className=''>
                <h1 className='lg:text-5xl text-3xl text-center font-medium my-10'>You Can See All Products</h1>
                <div className='lg:max-w-7xl lg:mx-auto mx-10 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-5 my-10'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
        </div>
    );
};

export default Shop;