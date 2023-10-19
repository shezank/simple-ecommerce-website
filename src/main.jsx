import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Root from './Components/Routes/Root/Root.jsx';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Sharde/AuthProvider/AuthProvider';
import Shop from './Components/Pages/Shop/Shop';
import AddProduct from './Components/Pages/AddProduct/AddProduct';
import MyCart from './Components/Pages/MyCart/MyCart';
import PrivateRoute from './Components/Routes/PrivateRoute/PrivateRoute';
import Products from './Components/Pages/Brand/Products/Products';
import ProductsDetails from './Components/Pages/Brand/Products/ProductsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: ()=>fetch('http://localhost:5000/products')
      },
      { 
        path: '/products/:bname',
        element: <Products></Products>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.bname}`)


      },
      { 
        path: '/product/:id',
        element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/orders')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
