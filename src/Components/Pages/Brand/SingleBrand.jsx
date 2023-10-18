import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrand = ({ brand }) => {
    return (
        <div>
            <Link to={`/products/${brand.tag}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-60 w-full' src={brand.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brand.name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleBrand;