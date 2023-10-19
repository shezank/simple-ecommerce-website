import React from 'react';
import { Link } from 'react-router-dom';

const BrandProduct = ({ products }) => {
    const { _id, name, brandName, type, price, description, rating, imgurl } = products;
    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure><img className='h-80 w-full' src={imgurl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between uppercase text-xl font-medium'>
                    <h3>Brand: {brandName}</h3>
                    <h3>Type: {type}</h3>
                </div>
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between mt-6">
                    <Link to={`/product/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary">Update Button</button>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;