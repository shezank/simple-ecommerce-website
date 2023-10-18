import React from 'react';

const Product = ({ product }) => {
    const { name, brandName, type, price, description, rating, imgurl } = product;
    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure><img src={imgurl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;