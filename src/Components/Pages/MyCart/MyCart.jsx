import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';



const MyCart = () => {
    const loadOrders = useLoaderData();
    const [orders, setOrders] = useState(loadOrders);

    const handeleDelete = id =>{
        console.log(id)
        fetch(`http://localhost:5000/orders/${id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then( data => {
            console.log(data)
            if(data.deletedCount > 0){
                const remainingProduct = orders.filter(order => order._id !== id);
                setOrders(remainingProduct);
                swal("Successfully!", "Deleted Your Product", "success");  
            }
        })
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-medium'>Your Orders</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                
                        <tr key={order._id}>
                        
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask  w-32 h-32">
                                        <img src={order.imgurl} alt={name} />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {order.name}
                        </td>
                        <td>${order.price}</td>
                        <th>
                            <button onClick={()=> handeleDelete(order._id)} className="btn btn-ghost btn-xs">Delete</button>
                        </th>
                    </tr>
                                )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;