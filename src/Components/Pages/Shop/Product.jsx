import React from 'react';

const Product = ({ product }) => {
    const { name, brandName, type, price, description, rating, imgurl } = product;
    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure><img className='h-72 w-full' src={imgurl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <hr />
                <div className='uppercase text-xl font-medium'>
                    <h3>Brand: {brandName}</h3>
                    <h3>Type: {type}</h3>
                </div>
                <hr />
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <hr />
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;