import React, { useState } from 'react';
import SingleBrand from './SingleBrand';
import BrandSliders from './BrandSliders';

const Brand = () => {
    
    const [brands, setBrands] = useState([]);
    fetch('http://localhost:5000/brands')
    .then(res => res.json())
    .then(data => setBrands(data))

    return (
        <div>
            
            <h1 className='text-5xl font-semibold text-center my-10'>Seleted Your Brands</h1>
            <div className='max-w-6xl mx-auto grid lg:grid-cols-4 grid-cols-1 gap-6 my-10 '>
                {
                    brands.map(brand => <SingleBrand key={brand._id} brand={brand}></SingleBrand>)
                }
            </div>

        </div>
    );
};

export default Brand;