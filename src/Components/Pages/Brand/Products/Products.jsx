import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandProduct from './BrandProduct';

const Products = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts)
    return (

        
        < div >
        {
            BrandProduct > 0?
           <>
            <h1 className='text-4xl text-center font-semibold my-10'>Shop Your Products</h1>
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 my-10 '>
                {
                    brandProducts.map(products => <BrandProduct key={products._id} products={products}></BrandProduct>)
                }
            </div>
           </>:
            <h1 className='text-4xl text-center font-semibold my-10'> Products Not Available</h1>
        }
        </div >
       
    
    );
};

export default Products;