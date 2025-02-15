import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Brands from "./components/Brands";
import Layout from './components/layout'
import Login from "./components/Login";
import Products from "./components/Products";
import Regisiter from './components/Regisiter'
import Forget_password from './components/forget_password'
import Verfiy from './verfiy'
import Reset_password from './reset_password'
import Product_details from "./components/product_details";
import CartContextProvider, { CartContext} from "./Contexts/CartContext";
import Checkout from './components/Checkout'


const x = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      { path: "home", element: <Home/> },
      { path: "cart", element: <Cart/> },
      { path: "wishlist", element: <Wishlist/> },
      { path: "categories", element: <Categories/> },
      { path: "brands", element: <Brands/> },
     
      { path: "products", element: <Products/> },
      { path: "home/:id", element: <Product_details/> },
      { path: "checkout", element: <Checkout/> },
    ]
  },
  {path:"login",element:<Login/>},
  {path:"signup",element:<Regisiter/>},
  {path:"forget_password",element:<Forget_password/>},
  {path:"verfiy",element:<Verfiy/>},
  {path:"reset_password",element:<Reset_password/>},


])

function App() {

  return (
    <>

  <CartContextProvider>
  <RouterProvider router={x}>
     
</RouterProvider>

</CartContextProvider>
 
    </>
  )
}

export default App
