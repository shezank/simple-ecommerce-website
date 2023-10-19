import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, brandName, type, price, description, rating, imgurl } = product;
    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure><img className='h-72 w-full' src={imgurl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <hr />
                <div className='uppercase text-xl font-medium'>
                    <h3>Brand: {brandName}</h3>
                    <h3>Type: {type}</h3>
                    <h3>Rating: {rating} <div className="rating rating-sm">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" /></div></h3>
                </div>
                <hr />
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <hr />
                <div className="card-actions justify-center">
                    <Link to={`/product/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;