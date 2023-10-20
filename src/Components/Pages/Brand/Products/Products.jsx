import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandProduct from './BrandProduct';
import BrandSliders from '../BrandSliders';

const Products = () => {
    const brandProducts = useLoaderData(null);
    const { bname } = useParams();
    return (
        < div >
            {
                brandProducts.length > 0 ?
                    <>


                        <BrandSliders></BrandSliders>


                        <h1 className='lg:text-4xl text-2xl text-center font-semibold uppercase my-10'>{bname} Products</h1>
                        <div className='lg:max-w-7xl lg:mx-auto mx-10 grid md:grid-cols-3 grid-cols-1 gap-6 my-10 '>
                            {
                                brandProducts.map(products =>
                                    <BrandProduct
                                        key={products._id}
                                        products={products}>

                                    </BrandProduct>

                                )
                            }
                        </div>
                    </> :
                    <h1 className='text-4xl text-center font-semibold my-10'> Products Not Available</h1>
            }
        </div >


    );
};

export default Products;