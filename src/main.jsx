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
import Brand from './Components/Pages/Brand/Brand';
import AddProduct from './Components/Pages/AddProduct/AddProduct';
import MyCart from './Components/Pages/MyCart/MyCart';
import PrivateRoute from './Components/Routes/PrivateRoute/PrivateRoute';
import AliExpress from './Components/Pages/Brand/AliExpress/AliExpress';
import Amazon from './Components/Pages/Brand/Amazon/Amazon';
import Walmart from './Components/Pages/Brand/Walmart/Walmart';
import Alibaba from './Components/Pages/Brand/Alibaba/Alibaba';
import Ebay from './Components/Pages/Brand/Ebay/Ebay';
import BestBuy from './Components/Pages/Brand/BestBuy/BestBuy';
import Products from './Components/Pages/Brand/Products/Products';

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
        path: '/brand',
        element: <Brand></Brand>,
        loader: ()=>fetch('http://localhost:5000/brands')
      },
      { 
        path: '/products/:bname',
        element: <Products></Products>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.bname}`)


      },
      { 
        path: '/aliexpress',
        element: <AliExpress></AliExpress>

      },
      { 
        path: '/amazon',
        element: <Amazon></Amazon>

      },
      { 
        path: '/walmart',
        element: <Walmart></Walmart>

      },
      { 
        path: '/alibaba',
        element: <Alibaba></Alibaba>

      },
      { 
        path: '/ebay',
        element: <Ebay></Ebay>

      },
      { 
        path: '/bestbuy',
        element: <BestBuy></BestBuy>

      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
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
