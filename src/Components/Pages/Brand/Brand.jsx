import React, { useEffect, useState } from 'react';
import SingleBrand from './SingleBrand';

const Brand = () => {

    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://ali-express-bd-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>

            <h1 className='lg:text-5xl text-3xl  font-semibold text-center my-10'>Seleted Your Brands</h1>
            <div className='max-w-6xl lg:mx-auto mx-10 grid lg:grid-cols-4 grid-cols-1 gap-6 my-10'>
                {
                    brands.map(brand => <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
                }
            </div>

        </div>
    );
};

export default Brand;