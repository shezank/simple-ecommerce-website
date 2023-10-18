import React from 'react';

const AddProduct = () => {
    const handeleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const imgurl = form.imgurl.value;
        const product = { name, brandName, type, price, description, rating, imgurl };
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal("Done!", "Successfully Add Your Product!", "success");
                }
                form.reset();
            })
    }
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <h1 className='text-center text-3xl font-bold mb-10'>Add Your Brand Product</h1>
            <form onSubmit={handeleAddProduct}>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Product Name
                        </label>
                        <input name='name' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Product Name" />

                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Brand Name
                        </label>
                        <input name='brandName' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Brand Name" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Product Type
                        </label>
                        <input name='type' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Product Type" />

                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                            Price
                        </label>
                        <input name='price' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="number" placeholder="Price" />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Short description
                        </label>
                        <input name='description' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Short description" />

                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Rating
                        </label>
                        <input name='rating' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Rating" />
                    </div>
                </div>
                <div className="-mx-3 mb-6">
                    <div className="px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Img Link
                        </label>
                        <input name='imgurl' className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Img Link" />
                    </div>
                </div>
                <button type="submit" className='btn btn-primary font-semibold w-full'>Add Product</button>
            </form>
        </div>

    );
};

export default AddProduct;